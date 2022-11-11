# Labyrinth

<iframe width="840" height="472" src="https://www.youtube.com/embed/6mjBu2BVt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Released in [Patch 15](patches/patch15.md). It is expected that details about Labyrinth change.

Labyrinth is a daily activity, consistenting of randomly generated set of 35 rooms.

You spend up to 100 actions to see how far into the labyrinth you can progress. Each room is associated with a different skill, and your chance to progress from the room is based on your level of that skill.


> Labyrinth works similar to dungeons, with a chance to proceed from one room to the next. Whereas the `Chance to Progress` is static to the dungeon room, in Labyrinth it depends on the players' skills.

## Labyrinth

The labyrinth are regenerated at server reset (00:00 server time). Everyone has the same labyrinth for that day.

![image](https://user-images.githubusercontent.com/267296/199644449-de74042f-f14d-4d72-8385-21509e783196.png)



## Room Progression

Each room has a skill and tier associated with it.

| Tier | Success rate per level | Success rate with a Level 100 skill | 
| ---- | ---- | ---- |
| <span class='lab1'>*</span> | .143 | 14.3%
| <span class='lab2'>**</span> | .100 | 10%
| <span class='rarity-epic'>***</span> |  .071 | 7.1%
| <span class='rarity-legendary'>****</span> |  .0526 | 5.26%
| <span class='rarity-mythic'>*****</span> | 0.044 | 4.4%

An attempt in a room rewards experience for the room's skill. So you can get crafting experience without spending any materials.

Experience Potions, Aptitude

## Rewards

![image](https://user-images.githubusercontent.com/267296/200761550-4ab0cbe8-04ff-467d-80e6-ac6e70d9c051.png)


Once completing the Labyrinth, you can open the "Labyrinth Reward Chest" which contains a number of items depending on how far you progressed.

The minimum reward is 1 item, but an additional item is added for each room you pass after room 5.

There are three drop-tables (Low, medium, and high).

Rewards scaled based on your current skill levels.

Additionally, you get a base amount of `Artisan Shards` (around 100) even if you don't complete any rooms. Additional shards seem to be related to total progress.

### Artisan Shards

**These are not yet implemented,** but will work similar to `Gathering Shards` to boost exp/gold/resources/etc. These are *not* tradeable.

It is impossible to gauge their value because we do not know how much will be required.

### Alchemical Dust

**These are not yet implemented,** will be used to for a new item, `Crafted Haste Potions`. Dust are tradeable.

It is impossible to gauge their value because we do not know how much will be required.

## Leaderboard

Two leaderboards for Labyrinth exist, one for `Progress Today` and one for `Progress Yesterday`. Leaderboards update every 5 minutes.

![image](https://user-images.githubusercontent.com/267296/199644111-84d846ff-cb7b-4f30-bd5a-875b8ee83e1c.png)


## Labyrinth Companion (Userscript)

https://greasyfork.org/en/scripts/454607-iqrpg-labyrinth-companion

More information: https://slyboots.studio/iqrpg-labyrinth-companion/#/

![image](https://user-images.githubusercontent.com/267296/200761757-722bef13-c293-4de8-b148-f6e3a051e64f.png)


Labyrinth Companion can be installed using Tampermonkey.

- Visually displays your Labyrinth just like a Dungeon.
- Calculates the percent chance of each room, based on your skills.
- Estimates the actions each room will take (based on chance)
- Estimates how far you can go in to Labyrinth with a given amount of actions.
