# Patch 8

[Patches](patches.md)

Trinkets
--------
- You can equip 3 trinkets.
- When battling, you have a 90% chance to find a battling trinket, and a 10% chance to find a gathering trinket. When gathering, you have a 90% chance at a gathering trinket.
- The lowest rarity of trinket to drop is rare, and comes with 3 bonuses. Each rarity higher has 1 more bonus, meaning mythical has 6 total bonuses.
- Battling trinkets can have the following bonuses (actual values per tier):
-- Battling Exp Boost (0.7%-1.4%)
-- Gold Boost (0.7%-1.4%)
-- Attribute Boost (0.7%-1.4%)
-- Mastery Boost (0.7%-1.4%)
-- Drop Boost (0.3%-0.7%)
-- Gold Per Battle (3-8)
-- Health (50-75 or 1.25%-1.875%)
-- Attack (50-75 or 1.25%-1.875%)
-- Defence (50-75 or 1.25%-1.875%)
- Gathering trinkets can have the following bonuses (actual values per tier):
-- Gathering Exp Boost (0.7%-1.4%)
-- Mastery Boost (0.7%-1.4%)
-- Drop Boost (0.3%-0.7%)
-- Resource Boost (0.3%-0.7%)
-- Resources Per Action (1-3)
-- Double Items (0.1%-0.2%)
-- Item Rarity (0.1%-0.3%)
- The drop rate for trinkets as a level 0 player is 1/125000. Drop boost is applied to this value, and then the following is added together to get the second drop modifier:
-- Battling or Gathering level gives +1% per level. Each level after 100 gives an additional +1%.
-- Land Level gives 2% per level.
-- Treasure Hunter gives 1% per level.
- Actual formula is 1/125000 * drop boost * trinket drop boost.
- Upgrading the treasure hunter allows you to obtain higher rarity trinkets.
- Most trinket drops will be tier 1. When you reach level 100, you will have a chance of obtainer a higher tier trinket. This chance increases per level. T4 is the highest that drops.
- You will be able to upgrade/destroy (for fragments) your trinkets in a few days. I want to gather some data first on the amount and quality of trinkets that are dropping before allowing upgrades and the sale of trinket fragments.

Gathering Bonus
---------------
- At any time, a gathering bonus will be active that boosts the basic resources from one of the gathering skills by 10%.
- Every minute, there is a 1/200 chance that this will change to another gathering skill.
- An event message is posted in chat when the gathering bonus changes, and the current gathering bonus is visible on the gathering section and is shown when you are performing the correct gathering skill.

Bosses
------
- All uncommon bosses are now 2 levels higher. The Lost Rune Warrior is now level 11, and The Vault Guardian is level 15.
- The boss damage formula was adjusted again making it harder to reach the boss damage cap.
- Attackng bosses now gives significantly more gold. In addition to this, if you are at the boss damage cap, you now gain some additional gold depending on how much damage you would have done if there had been no damage cap.
- You no longer have to "charge into battle" when attacking a boss. You now begin battling immediately.
- You can no longer attack a boss that has less than 20% health remaining. If you stop action and try to attack again, you will be unable to attack.

Runes
-----
- Runes now give +0.025% per 1 attribute, or the attribute value itself. Whichever is higher.

Jewels
------
- Jewels now give +0.025% per 1 attribute, or the attribute value itself. Whichever is higher.
- A rune which gives +0 to a particular attribute no longer displays that attribute.
- Self crafted jewels no longer show the actual +10% bonus, and instead display that you will receive a 10% bonus from the jewel.
- Self crafted jewels now give +10% to resource boosts.

Land
----
- Added a new personnel: Treasure Hunter. Each level increases the chances of finding a Trinket by 1% and increases the chances of a higher rarity trinket by 0.05%. Each rarity upgrade increases the chances of a higher rarity trinket by 1%.
- Your land level now increases the chances of finding a Trinket by 2% per level.

Bugs
----
- Fixed the display bug which caused your Vault Dungeon completions to be reset upon logging in.