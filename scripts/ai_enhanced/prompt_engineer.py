#!/usr/bin/env python3
"""
Automated Prompt Engineering System
Enhances prompts using local GPT-OSS models
"""

import requests
import json
from typing import List, Dict, Any

class PromptEngineer:
    def __init__(self, ollama_host: str = "http://localhost:11434"):
        self.ollama_host = ollama_host
        
    def enhance_prompt(self, base_prompt: str, style: str, world: str) -> str:
        """Enhance a base prompt with style and world context"""
        
        enhancement_request = f"""Enhance this image generation prompt for a fantasy TTRPG:

Base prompt: {base_prompt}
Style: {style}
World: {world}

Make it more descriptive, add artistic quality terms, and ensure it fits the {world} setting.
Enhanced prompt:"""
        
        try:
            response = requests.post(
                f"{self.ollama_host}/api/generate",
                json={
                    "model": "gpt-oss:latest",
                    "prompt": enhancement_request,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                return result.get("response", base_prompt).strip()
            
        except Exception as e:
            print(f"Prompt enhancement failed: {e}")
        
        return base_prompt

def main():
    engineer = PromptEngineer()
    
    # Test enhancement
    enhanced = engineer.enhance_prompt(
        "A mysterious merchant in a marketplace",
        "fantasy_portrait",
        "Aquabyssos"
    )
    
    print(f"Enhanced prompt: {enhanced}")

if __name__ == "__main__":
    main()
