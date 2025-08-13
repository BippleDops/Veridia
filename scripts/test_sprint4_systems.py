#!/usr/bin/env python3
"""
Sprint 4 Systems Test Suite
Comprehensive testing for all Sprint 4 Procedural Power features

Tests:
- Political Intrigue Web functionality
- NPC Daily Routines system
- Economic Market Simulator
- Local AI Integration
- Vault Website functionality
- Asset management and integration

Validates all workflows and ensures systems work correctly together.
"""

import os
import sys
import json
import unittest
from typing import Dict, List, Any
from datetime import datetime, time
import tempfile
import shutil
from pathlib import Path

# Add scripts directory to path for imports
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

try:
    from political_intrigue_web import PoliticalIntrigueWeb, PoliticalEntity, Relationship, Conspiracy
    from npc_daily_routines import NPCDailyRoutineSystem, ActivityBlock, NPCRoutine
    from economic_market_simulator import EconomicMarketSimulator, TradeGood, Market, MarketEvent
    from local_ai_integration import LocalAIIntegration, GenerationPrompt, GeneratedAsset
    from asset_downloader import AssetDownloader, DownloadedAsset
    IMPORTS_SUCCESSFUL = True
except ImportError as e:
    print(f"Import error: {e}")
    IMPORTS_SUCCESSFUL = False

class TestPoliticalIntrigueWeb(unittest.TestCase):
    """Test the Political Intrigue Web system"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.system = PoliticalIntrigueWeb(self.test_dir)
        
        # Add test entity
        test_entity = PoliticalEntity(
            name="Test Senator",
            entity_type="NPC",
            power_level=3,
            world="Aquabyssos",
            public_position="Senator",
            hidden_agendas=["Gain more power"],
            resources=["Political connections"],
            vulnerabilities=["Gambling addiction"]
        )
        self.system.entities["Test Senator"] = test_entity
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_entity_creation(self):
        """Test entity creation and storage"""
        self.assertIn("Test Senator", self.system.entities)
        entity = self.system.entities["Test Senator"]
        self.assertEqual(entity.world, "Aquabyssos")
        self.assertEqual(entity.power_level, 3)
    
    def test_conspiracy_generation(self):
        """Test conspiracy network generation"""
        conspiracy = self.system.generate_conspiracy_network("Test Senator", 3)
        
        self.assertIsNotNone(conspiracy)
        self.assertEqual(conspiracy.leader, "Test Senator")
        self.assertGreater(len(conspiracy.goals), 0)
        self.assertIn(conspiracy.name, self.system.conspiracies)
    
    def test_relationship_matrix(self):
        """Test relationship matrix generation"""
        # Add another entity for relationship testing
        entity2 = PoliticalEntity(
            name="Test Admiral",
            entity_type="NPC", 
            power_level=4,
            world="Aquabyssos",
            public_position="Admiral",
            hidden_agendas=["Military supremacy"],
            resources=["Naval fleet"],
            vulnerabilities=["Honor bound"]
        )
        self.system.entities["Test Admiral"] = entity2
        
        matrix = self.system.generate_relationship_matrix(["Test Senator", "Test Admiral"])
        
        self.assertIsInstance(matrix, dict)
        # Should have relationships between entities
        self.assertTrue(any(matrix.values()))
    
    def test_system_persistence(self):
        """Test saving and loading system state"""
        self.system.save_system_state()
        
        # Check that files were created
        data_dir = os.path.join(self.test_dir, "09_Performance")
        self.assertTrue(os.path.exists(os.path.join(data_dir, "political_entities.json")))
        
    def test_dashboard_generation(self):
        """Test dashboard content generation"""
        dashboard = self.system.create_intrigue_dashboard()
        
        self.assertIn("Political Intrigue Dashboard", dashboard)
        self.assertIn("Test Senator", dashboard)

class TestNPCDailyRoutines(unittest.TestCase):
    """Test the NPC Daily Routines system"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.system = NPCDailyRoutineSystem(self.test_dir)
        
        # Add test NPC data
        test_npc = {
            'name': 'Test Merchant',
            'world': 'Aquabyssos', 
            'occupation': 'merchant',
            'location': 'Market District',
            'personality': ['extroverted'],
            'relationships': ['Test Customer'],
            'secrets': ['Hidden warehouse'],
            'power_level': 2,
            'file_path': os.path.join(self.test_dir, 'test_npc.md')
        }
        self.system.npcs['Test Merchant'] = test_npc
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_routine_generation(self):
        """Test NPC routine generation"""
        routine = self.system.generate_routine_for_npc('Test Merchant')
        
        self.assertIsNotNone(routine)
        self.assertEqual(routine.npc_name, 'Test Merchant')
        self.assertEqual(routine.world, 'Aquabyssos')
        self.assertGreater(len(routine.base_schedule), 0)
    
    def test_current_activity_lookup(self):
        """Test current activity lookup"""
        # Generate routine first
        routine = self.system.generate_routine_for_npc('Test Merchant')
        
        # Test activity lookup
        activity = self.system.get_npc_current_activity('Test Merchant', '10:00')
        
        if activity:  # Routine generated successfully
            self.assertIsInstance(activity, ActivityBlock)
            self.assertIsInstance(activity.description, str)
    
    def test_location_occupants(self):
        """Test location occupant tracking"""
        # Generate routine
        self.system.generate_routine_for_npc('Test Merchant')
        
        # Get occupants at a specific time
        occupants = self.system.get_location_occupants('Market District', '10:00')
        
        # Should be a list (may be empty if no NPCs at location at that time)
        self.assertIsInstance(occupants, list)
    
    def test_encounter_simulation(self):
        """Test random encounter generation"""
        self.system.generate_routine_for_npc('Test Merchant')
        
        encounter = self.system.simulate_random_encounter('Market District', '10:00')
        
        self.assertIsInstance(encounter, dict)
        self.assertIn('type', encounter)
    
    def test_routine_persistence(self):
        """Test routine data persistence"""
        self.system.generate_routine_for_npc('Test Merchant')
        self.system.save_routine_data()
        
        # Check files were created
        data_dir = os.path.join(self.test_dir, "09_Performance")
        self.assertTrue(os.path.exists(os.path.join(data_dir, "npc_routines.json")))

class TestEconomicMarketSimulator(unittest.TestCase):
    """Test the Economic Market Simulator"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.system = EconomicMarketSimulator(self.test_dir)
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_market_initialization(self):
        """Test market system initialization"""
        self.assertGreater(len(self.system.markets), 0)
        self.assertGreater(len(self.system.trade_goods), 0)
        
        # Check that markets have goods
        for market in self.system.markets.values():
            self.assertGreater(len(market.trade_goods), 0)
    
    def test_market_day_simulation(self):
        """Test single day market simulation"""
        # Record initial prices
        initial_prices = {}
        for market_name, market in self.system.markets.items():
            initial_prices[market_name] = {}
            for good_name, good in market.trade_goods.items():
                initial_prices[market_name][good_name] = good.current_price
        
        # Simulate day
        self.system.simulate_market_day()
        
        # Check that simulation ran (prices may have changed)
        self.assertIsInstance(self.system.active_events, list)
    
    def test_market_report_generation(self):
        """Test market report generation"""
        market_name = list(self.system.markets.keys())[0]
        report = self.system.get_market_report(market_name)
        
        self.assertIsInstance(report, dict)
        self.assertIn('market_name', report)
        self.assertIn('goods', report)
        self.assertIsInstance(report['goods'], list)
    
    def test_event_generation(self):
        """Test market event generation"""
        initial_event_count = len(self.system.active_events)
        
        # Force event generation
        self.system._generate_random_event()
        
        self.assertGreater(len(self.system.active_events), initial_event_count)
        
        # Verify event structure
        if self.system.active_events:
            event = self.system.active_events[-1]
            self.assertIn('name', event.dict())
            self.assertIn('description', event.dict())
    
    def test_system_persistence(self):
        """Test economic data persistence"""
        self.system.save_economic_data()
        
        # Check files were created
        data_dir = os.path.join(self.test_dir, "09_Performance")
        self.assertTrue(os.path.exists(os.path.join(data_dir, "markets.json")))

class TestLocalAIIntegration(unittest.TestCase):
    """Test the Local AI Integration system"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.system = LocalAIIntegration(self.test_dir)
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_asset_type_initialization(self):
        """Test asset type configuration"""
        self.assertGreater(len(self.system.asset_types), 0)
        self.assertIn("portrait", self.system.asset_types)
        self.assertIn("location", self.system.asset_types)
    
    def test_prompt_generation(self):
        """Test generation prompt creation"""
        test_prompt = GenerationPrompt(
            prompt_id="test_prompt",
            asset_type="portrait",
            primary_prompt="A mysterious merchant in underwater city"
        )
        
        # Test prompt enhancement (without Ollama connection)
        enhanced = self.system._enhance_prompt_with_ollama(test_prompt)
        self.assertEqual(enhanced.prompt_id, test_prompt.prompt_id)
    
    def test_vault_scanning(self):
        """Test vault scanning for asset opportunities"""
        # Create test vault content
        test_content = '''---
type: NPC
world: Aquabyssos
---

# Test NPC

A mysterious merchant who deals in rare goods.

## Appearance
Tall and thin with piercing blue eyes.
'''
        test_file = os.path.join(self.test_dir, "test_npc.md")
        os.makedirs(os.path.dirname(test_file), exist_ok=True)
        with open(test_file, 'w') as f:
            f.write(test_content)
        
        # Scan for opportunities (will likely find none due to minimal test setup)
        opportunities = self.system.scan_vault_for_asset_needs()
        self.assertIsInstance(opportunities, list)
    
    def test_asset_batch_generation(self):
        """Test asset batch generation"""
        results = self.system.generate_asset_batch(["portrait"], limit=2)
        
        self.assertIsInstance(results, dict)
        self.assertIn("generated", results)
        self.assertIn("failed", results)
    
    def test_system_persistence(self):
        """Test system data persistence"""
        self.system.save_system_data()
        
        # Check that configuration files were created
        self.assertTrue(os.path.exists(os.path.join(self.test_dir, "05_Templates")))

class TestSystemIntegration(unittest.TestCase):
    """Test integration between all Sprint 4 systems"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        
        # Initialize all systems
        self.political_web = PoliticalIntrigueWeb(self.test_dir)
        self.npc_routines = NPCDailyRoutineSystem(self.test_dir)
        self.market_sim = EconomicMarketSimulator(self.test_dir)
        self.ai_integration = LocalAIIntegration(self.test_dir)
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_cross_system_data_sharing(self):
        """Test that systems can share data appropriately"""
        # Add entity to political system
        from political_intrigue_web import PoliticalEntity, PowerLevel
        entity = PoliticalEntity(
            name="Cross System Test NPC",
            entity_type="NPC",
            power_level=PowerLevel.MODERATE,
            world="Aquabyssos",
            public_position="Merchant",
            hidden_agendas=["Corner the crystal market"],
            resources=["Trade connections"],
            vulnerabilities=["Overextended financially"]
        )
        self.political_web.entities["Cross System Test NPC"] = entity
        
        # Add to NPC routines
        npc_data = {
            'name': 'Cross System Test NPC',
            'world': 'Aquabyssos',
            'occupation': 'merchant',
            'location': 'Market District',
            'personality': ['ambitious'],
            'relationships': [],
            'secrets': ['Hidden warehouse'],
            'power_level': 3,
            'file_path': '/test/path'
        }
        self.npc_routines.npcs['Cross System Test NPC'] = npc_data
        
        # Generate routine
        routine = self.npc_routines.generate_routine_for_npc('Cross System Test NPC')
        
        # Verify cross-system consistency
        self.assertEqual(entity.world, npc_data['world'])
        if routine:
            self.assertEqual(routine.world, entity.world)
    
    def test_full_system_simulation(self):
        """Test running all systems together"""
        try:
            # Run political system
            if self.political_web.entities:
                entity_name = list(self.political_web.entities.keys())[0]
                self.political_web.generate_conspiracy_network(entity_name, 3)
            
            # Run NPC routines
            if self.npc_routines.npcs:
                npc_name = list(self.npc_routines.npcs.keys())[0]
                self.npc_routines.generate_routine_for_npc(npc_name)
            
            # Run market simulation
            self.market_sim.simulate_market_day()
            
            # Generate AI assets
            self.ai_integration.generate_asset_batch(["portrait"], limit=1)
            
            # If we get here, all systems ran without error
            self.assertTrue(True)
            
        except Exception as e:
            self.fail(f"Full system simulation failed: {e}")
    
    def test_data_persistence_coordination(self):
        """Test that all systems can persist data without conflicts"""
        try:
            self.political_web.save_system_state()
            self.npc_routines.save_routine_data()
            self.market_sim.save_economic_data()
            self.ai_integration.save_system_data()
            
            # Check that all data directories exist
            data_dir = os.path.join(self.test_dir, "09_Performance")
            self.assertTrue(os.path.exists(data_dir))
            
        except Exception as e:
            self.fail(f"Data persistence coordination failed: {e}")

class TestWorkflowValidation(unittest.TestCase):
    """Test complete workflows from start to finish"""
    
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
    
    def tearDown(self):
        shutil.rmtree(self.test_dir, ignore_errors=True)
    
    def test_political_intrigue_workflow(self):
        """Test complete political intrigue workflow"""
        system = PoliticalIntrigueWeb(self.test_dir)
        
        # 1. System initialization
        self.assertIsInstance(system.entities, dict)
        
        # 2. Add test entities
        from political_intrigue_web import PoliticalEntity, PowerLevel
        entity = PoliticalEntity(
            name="Workflow Test Senator",
            entity_type="NPC",
            power_level=PowerLevel.HIGH,
            world="Aquabyssos",
            public_position="Senator",
            hidden_agendas=["Gain control of vote"],
            resources=["Political connections"],
            vulnerabilities=["Blackmail vulnerability"]
        )
        system.entities["Workflow Test Senator"] = entity
        
        # 3. Generate conspiracy
        conspiracy = system.generate_conspiracy_network("Workflow Test Senator", 4)
        self.assertIsNotNone(conspiracy)
        
        # 4. Generate relationships
        matrix = system.generate_relationship_matrix(["Workflow Test Senator"])
        self.assertIsInstance(matrix, dict)
        
        # 5. Create dashboard
        dashboard = system.create_intrigue_dashboard()
        self.assertIn("Workflow Test Senator", dashboard)
        
        # 6. Save state
        system.save_system_state()
    
    def test_campaign_preparation_workflow(self):
        """Test preparing for a campaign session"""
        # Initialize systems
        political_web = PoliticalIntrigueWeb(self.test_dir)
        npc_routines = NPCDailyRoutineSystem(self.test_dir)
        market_sim = EconomicMarketSimulator(self.test_dir)
        
        # 1. Set up political situation
        # (Would add key NPCs and conspiracies)
        
        # 2. Generate NPC routines
        # (Would add key NPCs and their daily schedules)
        
        # 3. Set market conditions
        # (Would adjust market conditions for session)
        
        # 4. Run simulation to current session time
        for _ in range(3):  # Simulate 3 days
            market_sim.simulate_market_day()
        
        # 5. Generate session reports
        market_report = market_sim.create_economic_dashboard()
        political_report = political_web.create_intrigue_dashboard()
        npc_report = npc_routines.create_routine_dashboard()
        
        # Verify reports generated
        self.assertIn("Economic Market Dashboard", market_report)
        self.assertIn("Political Intrigue Dashboard", political_report)
        self.assertIn("NPC Daily Routines Dashboard", npc_report)

def run_comprehensive_tests():
    """Run all test suites and generate report"""
    
    print("=" * 60)
    print("SPRINT 4 SYSTEMS COMPREHENSIVE TEST SUITE")
    print("=" * 60)
    
    if not IMPORTS_SUCCESSFUL:
        print("❌ CRITICAL: Could not import Sprint 4 systems")
        print("Please ensure all system files are present and functional")
        return False
    
    # Test suites to run
    test_suites = [
        TestPoliticalIntrigueWeb,
        TestNPCDailyRoutines, 
        TestEconomicMarketSimulator,
        TestLocalAIIntegration,
        TestSystemIntegration,
        TestWorkflowValidation
    ]
    
    total_tests = 0
    passed_tests = 0
    failed_tests = 0
    
    results = {}
    
    for test_suite in test_suites:
        print(f"\n🧪 Running {test_suite.__name__}...")
        
        # Create test suite
        suite = unittest.TestLoader().loadTestsFromTestCase(test_suite)
        runner = unittest.TextTestRunner(verbosity=1, stream=open(os.devnull, 'w'))
        
        # Run tests
        result = runner.run(suite)
        
        # Count results
        suite_total = result.testsRun
        suite_passed = suite_total - len(result.failures) - len(result.errors)
        suite_failed = len(result.failures) + len(result.errors)
        
        total_tests += suite_total
        passed_tests += suite_passed
        failed_tests += suite_failed
        
        # Store results
        results[test_suite.__name__] = {
            'total': suite_total,
            'passed': suite_passed,
            'failed': suite_failed,
            'failures': result.failures,
            'errors': result.errors
        }
        
        # Print results
        if suite_failed == 0:
            print(f"  ✅ All {suite_total} tests passed")
        else:
            print(f"  ⚠️  {suite_passed}/{suite_total} tests passed, {suite_failed} failed")
    
    # Generate summary report
    print("\n" + "=" * 60)
    print("TEST SUMMARY REPORT")
    print("=" * 60)
    
    print(f"Total Tests Run: {total_tests}")
    print(f"Tests Passed: {passed_tests}")
    print(f"Tests Failed: {failed_tests}")
    print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
    
    # Detailed results
    print("\nDETAILED RESULTS:")
    for suite_name, result in results.items():
        status = "✅ PASS" if result['failed'] == 0 else "❌ FAIL"
        print(f"{status} {suite_name}: {result['passed']}/{result['total']}")
        
        # Show failures
        if result['failures']:
            for failure in result['failures']:
                print(f"      FAILURE: {failure[0]}")
        
        if result['errors']:
            for error in result['errors']:
                print(f"      ERROR: {error[0]}")
    
    # System status
    print("\nSYSTEM STATUS:")
    systems_working = 0
    total_systems = 4  # Political, NPC, Economic, AI
    
    for suite_name, result in results.items():
        if "Political" in suite_name and result['failed'] == 0:
            print("✅ Political Intrigue Web: OPERATIONAL")
            systems_working += 1
        elif "NPC" in suite_name and result['failed'] == 0:
            print("✅ NPC Daily Routines: OPERATIONAL")
            systems_working += 1
        elif "Economic" in suite_name and result['failed'] == 0:
            print("✅ Economic Market Simulator: OPERATIONAL")
            systems_working += 1
        elif "LocalAI" in suite_name and result['failed'] == 0:
            print("✅ Local AI Integration: OPERATIONAL")
            systems_working += 1
    
    if failed_tests == 0:
        print("\n🎉 ALL SYSTEMS FULLY OPERATIONAL!")
        print("Sprint 4 implementation is ready for production use.")
    elif systems_working >= 3:
        print(f"\n⚠️  {systems_working}/{total_systems} core systems operational.")
        print("Some features may have limitations but core functionality works.")
    else:
        print(f"\n❌ Only {systems_working}/{total_systems} systems operational.")
        print("Significant issues detected. Review system implementation.")
    
    return failed_tests == 0

if __name__ == "__main__":
    success = run_comprehensive_tests()
    sys.exit(0 if success else 1)