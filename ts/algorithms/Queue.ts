import { Queue } from "../data_structures/Queue";

// hot potato game simulation (circular queue)
export const hotPotato = (namesList: string[], num: number): string => {
  const queue = new Queue<string>(namesList);

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    const eliminated = queue.dequeue()!;
    console.log(`${eliminated} was eliminated from the Hot Potato game.`);
  }
  return queue.dequeue()!;
};
