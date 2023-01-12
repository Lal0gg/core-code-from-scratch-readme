var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

function strCount(obj) {
  let cont = 0;
  for (let x in obj) {
    if (typeof obj[x] == "string") {
      cont++;
    } else if (typeof obj[x] == "object") {
      cont += strCount(obj[x]);
    }
  }

  return cont;
}

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
});

Array.prototype.first = function () {
  if (this.length == 0) {
    return undefined;
  } else {
    const copy = [...this];
    return copy[0];
  }
};

Array.prototype.last = function () {
  if (this.length == 0) {
    return undefined;
  } else {
    const copy = [...this];
    return copy[copy.length - 1];
  }
};

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20;
  };
}
