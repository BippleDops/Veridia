---
title: Ecosystem Simulation Engine
type: mechanics
status: complete
tags: [mechanics, ecosystem, simulation]
created: 2025-08-11
---

# Ecosystem Simulation Engine

Simulates food chains, migrations, predator-prey, weather, symbiosis, and extinction/evolution impacting play.

## Food Chains by Zone
- Surface, Twilight, Pressure, Crush, Abyss, Hadal; Sky: Low, Mid, High, Stratos, Orbital
- Each chain provides encounter baselines and resource yields

## Seasonal Migration (50+ species scaffold)
- Define routes on [[Transportation_Infrastructure]] networks
- Events: Stampedes, feeding frenzies, spawning grounds

## Predator–Prey Mechanics
- Predation Pressure Score modifies encounter frequency and aggression
- Overhunting collapse → faction/economic consequences (see [[Complete Faction Warfare System]])

## Dynamic Weather Systems
- Use [[Pressure & Weather Events]] to influence behavior and travel DCs

## Symbiosis Networks
- Leverage or disrupt to gain boons or trigger ecological backlash

## Extinction/Evolution Triggers
- Thresholds: Overuse, merger shifts, Deep Mother pulses
- Evolution grants new traits; extinction creates voids filled by horrors

Integration: Affects trade goods, travel safety, and faction stability. Hooks into [[Journey_Event_Compiler]].
