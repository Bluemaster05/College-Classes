class SomeClass():
    def __add__(self, other):
        return "Add self and other"
    
obj1, obj2 = SomeClass(), SomeClass
print(obj1 + obj2)
