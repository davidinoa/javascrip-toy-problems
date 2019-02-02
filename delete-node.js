// Delete a node from a singly-linked list, given only a variable pointing to that node.

function deleteNode(nodeToDelete) {
  const nextNode = nodeToDelete.next;
  if (nextNode) {
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {
    throw new Error('cant delete last node');
  }
}
