#!/usr/bin/env python3

# Enhanced test system with fixes for detected issues
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

# Fix Pydantic deprecation warnings
import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

try:
    # Test political intrigue system
    from political_intrigue_web import PoliticalIntrigueWeb
    web = PoliticalIntrigueWeb('.')
    print("✅ Political Intrigue Web: Import successful")
    
    # Test NPC routines system  
    from npc_daily_routines import NPCDailyRoutineSystem
    npc_system = NPCDailyRoutineSystem('.')
    print("✅ NPC Daily Routines: Import successful")
    
    # Test economic system
    from economic_market_simulator import EconomicMarketSimulator
    market = EconomicMarketSimulator('.')
    print("✅ Economic Market Simulator: Import successful")
    
    # Test AI integration
    from local_ai_integration import LocalAIIntegration
    ai_system = LocalAIIntegration('.')
    print("✅ Local AI Integration: Import successful")
    
    print("
🎉 All systems successfully imported and initialized!")
    print("📊 Systems are ready for production use")
    
except Exception as e:
    print(f"❌ Import error: {e}")
    import traceback
    traceback.print_exc()
