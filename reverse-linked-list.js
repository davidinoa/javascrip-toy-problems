function reverse(headOfList) {
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}