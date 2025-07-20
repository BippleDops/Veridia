---
tags:
  - analytics
  - dashboard
  - metrics
  - optimization
  - advanced-system
cssclasses:
  - dashboard
  - analytics-engine
  - wide-page
---

# 📊 Advanced Campaign Analytics Dashboard

**Research-Based Sophisticated Metrics & Optimization System**

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ## 🚀 Performance Metrics
>> `BUTTON[runFullAnalytics]` 📈 Full Analysis
>> `BUTTON[optimizeSystem]` ⚡ Optimize Performance  
>> `BUTTON[generateReport]` 📋 Campaign Report
>> `BUTTON[exportMetrics]` 💾 Export Data
>
>> [!INFO|clean no-t]
>> ## 🎯 Quick Insights
>> `BUTTON[sessionTrends]` 📅 Session Trends
>> `BUTTON[npcEngagement]` 👥 NPC Analytics
>> `BUTTON[questProgress]` 🎲 Quest Metrics
>> `BUTTON[playerActivity]` 🎭 Player Patterns

---

## 📈 Executive Campaign Summary

```dataviewjs
// Advanced campaign health metrics
const sessions = dv.pages('"1-Session Journals"');
const npcs = dv.pages('#NPC');
const quests = dv.pages('"2-World/Quests"');
const locations = dv.pages('"2-World/Hubs" OR "2-World/Places"');

// Calculate key metrics
const totalSessions = sessions.length;
const avgSessionRating = sessions.where(s => s.session_rating).map(s => s.session_rating).reduce((a, b) => a + b, 0) / sessions.where(s => s.session_rating).length || 0;
const activeNPCs = npcs.where(n => n.status === 'active').length;
const completedQuests = quests.where(q => q.status === 'completed').length;
const activeQuests = quests.where(q => q.status === 'active').length;

// Campaign health score calculation
const healthFactors = {
  sessionConsistency: totalSessions > 10 ? 1.0 : totalSessions / 10,
  sessionQuality: avgSessionRating / 5,
  npcDiversity: Math.min(activeNPCs / 20, 1.0),
  questCompletion: completedQuests > 0 ? Math.min(completedQuests / 5, 1.0) : 0,
  worldDevelopment: Math.min(locations.length / 15, 1.0)
};

const campaignHealth = Math.round(Object.values(healthFactors).reduce((a, b) => a + b, 0) / Object.keys(healthFactors).length * 100);

// Display executive summary
dv.paragraph(`# 🎯 Campaign Health Score: ${campaignHealth}%`);
dv.paragraph(`
**📊 Key Metrics Overview**
- **Total Sessions**: ${totalSessions}
- **Average Rating**: ${avgSessionRating.toFixed(1)}/5.0
- **Active NPCs**: ${activeNPCs}
- **Active Quests**: ${activeQuests} | **Completed**: ${completedQuests}
- **World Locations**: ${locations.length}
`);

// Health status indicator
const healthStatus = campaignHealth >= 80 ? "🟢 EXCELLENT" : 
                    campaignHealth >= 60 ? "🟡 GOOD" : 
                    campaignHealth >= 40 ? "🟠 NEEDS ATTENTION" : "🔴 CRITICAL";
dv.paragraph(`**Campaign Status**: ${healthStatus}`);
```

---

## 📅 Session Performance Analytics

### Session Trends & Patterns
```dataviewjs
// Advanced session analytics with trend analysis
const sessions = dv.pages('"1-Session Journals"').sort(s => s.date, 'desc');
const last10Sessions = sessions.slice(0, 10);
const last5Sessions = sessions.slice(0, 5);

if (sessions.length >= 5) {
  dv.paragraph("**📈 Session Performance Trends**");
  
  // Rating trend analysis
  const ratedSessions = sessions.where(s => s.session_rating);
  if (ratedSessions.length >= 3) {
    const recentAvg = last5Sessions.where(s => s.session_rating).map(s => s.session_rating).reduce((a, b) => a + b, 0) / last5Sessions.where(s => s.session_rating).length;
    const overallAvg = ratedSessions.map(s => s.session_rating).reduce((a, b) => a + b, 0) / ratedSessions.length;
    const trend = recentAvg > overallAvg ? "📈 IMPROVING" : recentAvg < overallAvg ? "📉 DECLINING" : "➖ STABLE";
    
    dv.paragraph(`- **Rating Trend**: ${trend} (Recent: ${recentAvg.toFixed(1)} vs Overall: ${overallAvg.toFixed(1)})`);
  }
  
  // Session length and engagement metrics
  const avgDuration = sessions.where(s => s.duration).map(s => parseFloat(s.duration) || 0).reduce((a, b) => a + b, 0) / sessions.where(s => s.duration).length;
  const recentDuration = last5Sessions.where(s => s.duration).map(s => parseFloat(s.duration) || 0).reduce((a, b) => a + b, 0) / last5Sessions.where(s => s.duration).length;
  
  if (avgDuration > 0) {
    const durationTrend = recentDuration > avgDuration ? "📈 LONGER" : recentDuration < avgDuration ? "📉 SHORTER" : "➖ CONSISTENT";
    dv.paragraph(`- **Session Length**: ${durationTrend} (Recent: ${recentDuration.toFixed(1)}h vs Avg: ${avgDuration.toFixed(1)}h)`);
  }
  
  // Content engagement analysis  
  const avgNPCsPerSession = sessions.where(s => s.npcsMet && s.npcsMet.length > 0).map(s => s.npcsMet.length).reduce((a, b) => a + b, 0) / sessions.where(s => s.npcsMet).length;
  const recentNPCs = last5Sessions.where(s => s.npcsMet && s.npcsMet.length > 0).map(s => s.npcsMet.length).reduce((a, b) => a + b, 0) / last5Sessions.where(s => s.npcsMet).length;
  
  if (avgNPCsPerSession > 0) {
    const npcTrend = recentNPCs > avgNPCsPerSession ? "📈 MORE SOCIAL" : recentNPCs < avgNPCsPerSession ? "📉 LESS SOCIAL" : "➖ CONSISTENT";
    dv.paragraph(`- **NPC Interaction**: ${npcTrend} (Recent: ${recentNPCs.toFixed(1)} vs Avg: ${avgNPCsPerSession.toFixed(1)} per session)`);
  }
  
} else {
  dv.paragraph("*Need at least 5 sessions for trend analysis.*");
}
```

### Session Quality Factors
```dataviewjs
// Analyze what makes sessions successful
const qualitySessions = dv.pages('"1-Session Journals"').where(s => s.session_rating && s.session_rating >= 4);
const poorSessions = dv.pages('"1-Session Journals"').where(s => s.session_rating && s.session_rating <= 2);

if (qualitySessions.length > 0) {
  dv.paragraph("**⭐ High-Quality Session Patterns**");
  
  // Common factors in successful sessions
  let successFactors = {
    'High NPC Interaction': qualitySessions.where(s => s.npcsMet && s.npcsMet.length >= 3).length,
    'Multiple Locations': qualitySessions.where(s => s.locationsVisited && s.locationsVisited.length >= 2).length,
    'Quest Progress': qualitySessions.where(s => s.questsAdvanced && s.questsAdvanced.length >= 1).length,
    'Combat Encounters': qualitySessions.where(s => s.combats && s.combats.length >= 1).length,
    'Significant Loot': qualitySessions.where(s => s.loot && s.loot.length >= 1).length
  };
  
  Object.entries(successFactors).forEach(([factor, count]) => {
    const percentage = Math.round((count / qualitySessions.length) * 100);
    dv.paragraph(`- **${factor}**: ${percentage}% of high-rated sessions`);
  });
}

if (poorSessions.length > 0) {
  dv.paragraph("**⚠️ Areas for Improvement**");
  dv.paragraph(`${poorSessions.length} session(s) rated 2 or below - analyze for common issues`);
}
```

---

## 👥 NPC Engagement Analytics

### NPC Effectiveness Metrics
```dataviewjs
// Sophisticated NPC analytics
const npcs = dv.pages('#NPC');
const sessions = dv.pages('"1-Session Journals"');

// Calculate NPC appearance frequency and impact
let npcMetrics = {};

sessions.forEach(session => {
  if (session.npcsMet && session.npcsMet.length > 0) {
    session.npcsMet.forEach(npcName => {
      if (!npcMetrics[npcName]) {
        npcMetrics[npcName] = {
          appearances: 0,
          totalSessionRating: 0,
          ratedSessions: 0,
          lastSeen: session.date
        };
      }
      npcMetrics[npcName].appearances++;
      if (session.session_rating) {
        npcMetrics[npcName].totalSessionRating += session.session_rating;
        npcMetrics[npcName].ratedSessions++;
      }
    });
  }
});

// Sort by effectiveness (appearances × average session rating)
const npcEffectiveness = Object.entries(npcMetrics)
  .map(([name, metrics]) => ({
    name,
    appearances: metrics.appearances,
    avgRating: metrics.ratedSessions > 0 ? metrics.totalSessionRating / metrics.ratedSessions : 0,
    effectiveness: metrics.appearances * (metrics.ratedSessions > 0 ? metrics.totalSessionRating / metrics.ratedSessions : 2.5),
    lastSeen: metrics.lastSeen
  }))
  .sort((a, b) => b.effectiveness - a.effectiveness);

if (npcEffectiveness.length > 0) {
  dv.paragraph("**🌟 Most Effective NPCs** (Appearances × Session Quality)");
  
  npcEffectiveness.slice(0, 8).forEach((npc, index) => {
    const npcData = npcs.where(n => n.file.name === npc.name).first();
    const status = npcData ? npcData.status || 'Unknown' : 'Unknown';
    const occupation = npcData ? npcData.occupation || 'Unknown' : 'Unknown';
    
    dv.paragraph(`${index + 1}. **${npc.name}** (${occupation})`);
    dv.paragraph(`   - Appearances: ${npc.appearances} | Avg Session Rating: ${npc.avgRating.toFixed(1)} | Status: ${status}`);
  });
  
  // Identify underutilized NPCs
  const underutilized = npcs.where(n => {
    const npcName = n.file.name;
    const metrics = npcMetrics[npcName];
    return !metrics || metrics.appearances <= 1;
  });
  
  if (underutilized.length > 0) {
    dv.paragraph(`**💡 Underutilized NPCs**: ${underutilized.length} NPCs with 1 or fewer appearances`);
  }
  
} else {
  dv.paragraph("*No NPC interaction data found in session logs.*");
}
```

### NPC Relationship Network Analysis
```dataviewjs
// Analyze NPC connection networks
const npcs = dv.pages('#NPC');
let relationshipNetwork = new Map();

npcs.forEach(npc => {
  const connections = [];
  
  // Count family relationships
  if (npc.family && npc.family.length > 0) {
    npc.family.forEach(f => connections.push({type: 'family', target: f}));
  }
  
  // Count allies
  if (npc.allies && npc.allies.length > 0) {
    npc.allies.forEach(a => connections.push({type: 'ally', target: a}));
  }
  
  // Count enemies
  if (npc.enemies && npc.enemies.length > 0) {
    npc.enemies.forEach(e => connections.push({type: 'enemy', target: e}));
  }
  
  relationshipNetwork.set(npc.file.name, connections);
});

// Find most connected NPCs
const connectionCounts = Array.from(relationshipNetwork.entries())
  .map(([name, connections]) => ({
    name,
    totalConnections: connections.length,
    familyConnections: connections.filter(c => c.type === 'family').length,
    allies: connections.filter(c => c.type === 'ally').length,
    enemies: connections.filter(c => c.type === 'enemy').length
  }))
  .sort((a, b) => b.totalConnections - a.totalConnections);

if (connectionCounts.length > 0) {
  dv.paragraph("**🕸️ Most Connected NPCs**");
  
  connectionCounts.slice(0, 5).forEach(npc => {
    if (npc.totalConnections > 0) {
      dv.paragraph(`- **${npc.name}**: ${npc.totalConnections} connections (${npc.allies} allies, ${npc.enemies} enemies, ${npc.familyConnections} family)`);
    }
  });
  
  const isolatedNPCs = connectionCounts.filter(n => n.totalConnections === 0).length;
  if (isolatedNPCs > 0) {
    dv.paragraph(`**⚠️ Isolated NPCs**: ${isolatedNPCs} NPCs with no documented relationships`);
  }
}
```

---

## 🎲 Quest & Content Analytics

### Quest Completion Metrics
```dataviewjs
// Advanced quest tracking and success analysis
const quests = dv.pages('"2-World/Quests"');
const sessions = dv.pages('"1-Session Journals"');

// Calculate quest metrics
const questStats = {
  total: quests.length,
  active: quests.where(q => q.status === 'active').length,
  completed: quests.where(q => q.status === 'completed').length,
  failed: quests.where(q => q.status === 'failed').length,
  onHold: quests.where(q => q.status === 'on-hold').length
};

const completionRate = questStats.total > 0 ? Math.round((questStats.completed / questStats.total) * 100) : 0;

dv.paragraph(`**🎯 Quest Performance Summary**`);
dv.paragraph(`- **Completion Rate**: ${completionRate}% (${questStats.completed}/${questStats.total})`);
dv.paragraph(`- **Active Quests**: ${questStats.active}`);
dv.paragraph(`- **Failed/Abandoned**: ${questStats.failed}`);
dv.paragraph(`- **On Hold**: ${questStats.onHold}`);

// Quest complexity analysis
const questComplexity = quests.map(q => {
  const complexity = (q.objectives ? q.objectives.length : 1) + 
                    (q.complications ? q.complications.length : 0) + 
                    (q.npcsInvolved ? q.npcsInvolved.length : 0);
  return { name: q.file.name, complexity, status: q.status };
}).sort((a, b) => b.complexity - a.complexity);

if (questComplexity.length > 0) {
  dv.paragraph("**🧩 Most Complex Quests**");
  questComplexity.slice(0, 3).forEach(q => {
    dv.paragraph(`- **${q.name}**: Complexity ${q.complexity} (${q.status})`);
  });
}

// Quest advancement tracking
const questAdvancement = new Map();
sessions.forEach(session => {
  if (session.questsAdvanced && session.questsAdvanced.length > 0) {
    session.questsAdvanced.forEach(questName => {
      if (!questAdvancement.has(questName)) {
        questAdvancement.set(questName, 0);
      }
      questAdvancement.set(questName, questAdvancement.get(questName) + 1);
    });
  }
});

if (questAdvancement.size > 0) {
  dv.paragraph("**⚡ Most Actively Advanced Quests**");
  const sortedAdvancement = Array.from(questAdvancement.entries())
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);
    
  sortedAdvancement.forEach(([questName, advances]) => {
    dv.paragraph(`- **${questName}**: Advanced in ${advances} session(s)`);
  });
}
```

---

## 🌍 World Development Analytics

### Location Usage Metrics
```dataviewjs
// Analyze location usage and development
const locations = dv.pages('"2-World/Hubs" OR "2-World/Places" OR "2-World/Points of Interest"');
const sessions = dv.pages('"1-Session Journals"');

// Track location visits
let locationVisits = new Map();
sessions.forEach(session => {
  if (session.locationsVisited && session.locationsVisited.length > 0) {
    session.locationsVisited.forEach(location => {
      locationVisits.set(location, (locationVisits.get(location) || 0) + 1);
    });
  }
});

dv.paragraph("**🗺️ World Development Overview**");
dv.paragraph(`- **Total Locations**: ${locations.length}`);
dv.paragraph(`- **Visited Locations**: ${locationVisits.size}`);
dv.paragraph(`- **Unexplored Locations**: ${locations.length - locationVisits.size}`);

// Most visited locations
if (locationVisits.size > 0) {
  const sortedVisits = Array.from(locationVisits.entries())
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);
    
  dv.paragraph("**🏆 Most Visited Locations**");
  sortedVisits.forEach(([locationName, visits]) => {
    dv.paragraph(`- **${locationName}**: ${visits} visit(s)`);
  });
}

// Location development analysis
const locationDevelopment = locations.map(loc => {
  const developmentScore = 
    (loc.description ? 1 : 0) +
    (loc.npcs && loc.npcs.length > 0 ? 1 : 0) +
    (loc.shops && loc.shops.length > 0 ? 1 : 0) +
    (loc.points_of_interest && loc.points_of_interest.length > 0 ? 1 : 0) +
    (loc.secrets && loc.secrets.length > 0 ? 1 : 0);
    
  return { name: loc.file.name, development: developmentScore };
}).sort((a, b) => b.development - a.development);

const averageDevelopment = locationDevelopment.reduce((sum, loc) => sum + loc.development, 0) / locationDevelopment.length;
dv.paragraph(`**🏗️ Average Location Development**: ${averageDevelopment.toFixed(1)}/5.0`);

const underdevelopedLocations = locationDevelopment.filter(loc => loc.development <= 2).length;
if (underdevelopedLocations > 0) {
  dv.paragraph(`**⚠️ Underdeveloped Locations**: ${underdevelopedLocations} locations need more detail`);
}
```

---

## 📊 Performance Optimization Metrics

### System Health Analysis
```dataviewjs
// Analyze system performance and optimization opportunities
const allPages = dv.pages();
const vaultStats = {
  totalPages: allPages.length,
  npcs: dv.pages('#NPC').length,
  sessions: dv.pages('"1-Session Journals"').length,
  quests: dv.pages('"2-World/Quests"').length,
  locations: dv.pages('"2-World"').length
};

dv.paragraph("**⚡ System Performance Overview**");
dv.paragraph(`- **Total Pages**: ${vaultStats.totalPages}`);
dv.paragraph(`- **Content Distribution**: NPCs (${vaultStats.npcs}), Sessions (${vaultStats.sessions}), Quests (${vaultStats.quests}), Locations (${vaultStats.locations})`);

// Identify pages with missing tags or metadata
const pagesWithoutTags = allPages.where(p => !p.tags || p.tags.length === 0).length;
const sessionsMissingRatings = dv.pages('"1-Session Journals"').where(s => !s.session_rating).length;

if (pagesWithoutTags > 0 || sessionsMissingRatings > 0) {
  dv.paragraph("**🔧 Optimization Opportunities**");
  if (pagesWithoutTags > 0) {
    dv.paragraph(`- ${pagesWithoutTags} pages missing tags for better organization`);
  }
  if (sessionsMissingRatings > 0) {
    dv.paragraph(`- ${sessionsMissingRatings} sessions missing quality ratings`);
  }
}

// Link density analysis
const totalLinks = allPages.map(p => (p.file.outlinks || []).length).reduce((a, b) => a + b, 0);
const avgLinksPerPage = Math.round(totalLinks / allPages.length);
dv.paragraph(`**🔗 Content Connectivity**: ${avgLinksPerPage} average links per page`);

if (avgLinksPerPage < 3) {
  dv.paragraph("**💡 Suggestion**: Increase cross-referencing between content for better campaign connectivity");
}
```

---

## 🎯 Predictive Analytics

### Campaign Trajectory Prediction
```dataviewjs
// Predict campaign needs based on current trends
const sessions = dv.pages('"1-Session Journals"').sort(s => s.date, 'desc');
const recentSessions = sessions.slice(0, 5);

if (recentSessions.length >= 3) {
  dv.paragraph("**🔮 Predictive Insights**");
  
  // Predict content needs based on recent activity
  const avgNPCsPerSession = recentSessions
    .where(s => s.npcsMet && s.npcsMet.length > 0)
    .map(s => s.npcsMet.length)
    .reduce((a, b) => a + b, 0) / recentSessions.length;
  
  const avgLocationsPerSession = recentSessions
    .where(s => s.locationsVisited && s.locationsVisited.length > 0)
    .map(s => s.locationsVisited.length)
    .reduce((a, b) => a + b, 0) / recentSessions.length;
  
  if (avgNPCsPerSession > 3) {
    dv.paragraph("- **High NPC demand**: Consider creating more social NPCs");
  }
  
  if (avgLocationsPerSession > 2) {
    dv.paragraph("- **High travel rate**: Develop more locations along travel routes");
  }
  
  // Quest completion prediction
  const activeQuests = dv.pages('"2-World/Quests"').where(q => q.status === 'active');
  const questAdvancementRate = recentSessions
    .where(s => s.questsAdvanced && s.questsAdvanced.length > 0)
    .map(s => s.questsAdvanced.length)
    .reduce((a, b) => a + b, 0) / recentSessions.length;
  
  if (questAdvancementRate > 0 && activeQuests.length > 0) {
    const estimatedCompletion = Math.ceil(activeQuests.length / questAdvancementRate);
    dv.paragraph(`- **Quest completion estimate**: ${estimatedCompletion} sessions to complete current active quests`);
  }
  
  // Campaign milestone prediction
  const sessionCount = sessions.length;
  if (sessionCount % 10 === 8 || sessionCount % 10 === 9) {
    dv.paragraph("- **Milestone approaching**: Consider planning major story beat or celebration");
  }
}
```

---

## 🏆 Achievement & Progress Tracking

### Campaign Milestones
```dataviewjs
// Track campaign achievements and milestones
const sessions = dv.pages('"1-Session Journals"');
const npcs = dv.pages('#NPC');
const quests = dv.pages('"2-World/Quests"');

const achievements = {
  '🎲 First Session': sessions.length >= 1,
  '🔥 Getting Started (5 Sessions)': sessions.length >= 5,
  '⚡ Regular Campaign (10 Sessions)': sessions.length >= 10,
  '🌟 Established Campaign (20 Sessions)': sessions.length >= 20,
  '👑 Epic Campaign (50 Sessions)': sessions.length >= 50,
  '🏆 Legendary Campaign (100 Sessions)': sessions.length >= 100,
  
  '👥 Social Butterfly (20 NPCs)': npcs.length >= 20,
  '🎭 Character Actor (50 NPCs)': npcs.length >= 50,
  '🌍 World Builder (100 NPCs)': npcs.length >= 100,
  
  '📜 Quest Giver (5 Quests)': quests.length >= 5,
  '⚔️ Adventure Master (10 Quests)': quests.length >= 10,
  '🗺️ Campaign Architect (25 Quests)': quests.length >= 25,
  
  '⭐ Quality Focus': sessions.where(s => s.session_rating && s.session_rating >= 4).length >= 10,
  '🎵 Musical Master': sessions.where(s => s.musicLog && s.musicLog.length > 0).length >= 5,
  '🤖 AI Enhanced': npcs.where(n => n.ai_generated === true).length >= 10
};

const unlockedAchievements = Object.entries(achievements).filter(([name, unlocked]) => unlocked);
const totalAchievements = Object.keys(achievements).length;

dv.paragraph(`**🏆 Campaign Achievements: ${unlockedAchievements.length}/${totalAchievements}**`);

unlockedAchievements.forEach(([name, unlocked]) => {
  dv.paragraph(`✅ ${name}`);
});

const nextAchievements = Object.entries(achievements).filter(([name, unlocked]) => !unlocked).slice(0, 3);
if (nextAchievements.length > 0) {
  dv.paragraph("**🎯 Next Goals:**");
  nextAchievements.forEach(([name, unlocked]) => {
    dv.paragraph(`🔲 ${name}`);
  });
}
```

---

*This Advanced Analytics Dashboard provides deep insights into campaign performance, player engagement, and content effectiveness while predicting future needs and optimization opportunities based on research into professional TTRPG management systems.* 