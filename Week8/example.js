queue = ["sheep", "sheep", "sheep", "wolf", "sheep"];

function warnTheSheep(queue) {
  const stateWolf = queue.indexOf("wolf");
  if (stateWolf == queue.length - 1)
    return "Pls go away and stop eating my sheep";
  const stateSheep = queue.length - (stateWolf + 1);
  return (
    "Oi! Sheep number " + stateSheep + "! You are about to be eaten by a wolf!"
  );
}

warnTheSheep(queue);
