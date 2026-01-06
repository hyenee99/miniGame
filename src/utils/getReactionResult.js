import { reactionRanks } from "./reactionRank";

export function getReactionResult(ms) {
  return reactionRanks.find((rank) => ms <= rank.max);
}
