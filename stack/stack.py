class Stack:
     def __init__(self):
         self.items = []

     def isEmpty(self):
         return self.items == []

     def push(self, item):
         self.items.append(item)

     def pop(self):
         return self.items.pop()

     def peek(self):
         return self.items[len(self.items)-1]

     def size(self):
         return len(self.items)

##
stack=Stack()

print(stack.isEmpty())
stack.push(4)
stack.push('tree')
print(stack.peek())
stack.push(True)
print(stack.size())
print(stack.isEmpty())
stack.push(2.1)
print(stack.pop())
print(stack.pop())
print(stack.size())