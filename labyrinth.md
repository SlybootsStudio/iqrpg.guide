# Labyrinth

<iframe width="840" height="472" src="https://www.youtube.com/embed/6mjBu2BVt2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Released in [Patch 15](patches/patch15.md). It is expected that details about Labyrinth change.

Labyrinth is a daily activity, consistenting of randomly generated set of 35 rooms.

You spend up to 100 actions to see how far into the labyrinth you can progress. Each room is associated with a different skill, and your chance to progress from the room is based on your level of that skill.


> Labyrinth works similar to dungeons, with a chance to proceed from one room to the next. Whereas the `Chance to Progress` is static to the dungeon room, in Labyrinth it depends on the players' skills.

## Labyrinth

The labyrinth are regenerated at server reset (00:00 server time).

![image](https://user-images.githubusercontent.com/267296/199644449-de74042f-f14d-4d72-8385-21509e783196.png)



## Room Progression

Each room has a skill and tier associated with it.

| Tier | Success rate per level | Success rate with a Level 100 skill | 
| ---- | ---- | ---- |
| <span class='rarity-uncommon'>*</span> | .143 | 14.3%
| <span class='rarity-epic'>**</span> |  .100 | 10%
| <span class='rarity-legendary'>***</span> |  .071 | 7.1%
| <span class='rarity-mythic'>****</span> | ??? | ???

## Rewards

Once completing the Labyrinth, you can open the "Labyrinth Reward Chest" which contains a number of items depending on how far you progressed.

The minimum reward is 1 item, but an additional item is added for each room you pass after room 5.

There are three drop-tables (Low, medium, and high).

Rewards scaled based on your current skill levels.

Additionally, you get 30-32 Artisan Shards per room.

### Artisan Shards

**These are not yet implemented,** but will work similar to `Gathering Shards` to boost exp/gold/resources/etc. These are *not* tradeable.

It is impossible to gauge their value because we do not know how much will be required.

### Alchemical Dust

**These are not yet implemented,** will be used to craft `Haste Potions`. These are tradeable.

It is impossible to gauge their value because we do not know how much will be required.

## Leaderboard

Two leaderboards for Labyrinth exist, one for `Progress Today` and one for `Progress Yesterday`. Leaderboards update every 5 minutes.

![image](https://user-images.githubusercontent.com/267296/199644111-84d846ff-cb7b-4f30-bd5a-875b8ee83e1c.png)
