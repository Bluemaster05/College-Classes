import unittest
import liststuff 

class TestList(unittest.TestCase):
    
    def test_Maximum(self):
        a = []
        b = [1, 2, 3, 4, 5]
        c = [5, 4, 3, 2, 1]
        d = [1, 5, 2, 5, 3]
        e = [-1, -50, 50 , 1]
        self.assertIsNone(liststuff.maximum(a))
        self.assertEqual(liststuff.maximum(b), 5)
        self.assertEqual(liststuff.maximum(c), 5)
        self.assertEqual(liststuff.maximum(d), 5)
        self.assertEqual(liststuff.maximum(e), 50)
    
    def test_Find(self):
        a = [1, 2, 3, 4, 5]
        b = [5, 2, 3, 4, 5]
        c = [1, 2, 3, 4, 5]
        d = [1, 10, 5, 3 ,5, 20]
        e = [-1, 30, -34, 53, 23]
        self.assertEqual(liststuff.find(a, 5), 4)
        self.assertEqual(liststuff.find(b, 5), 0)
        self.assertEqual(liststuff.find(c, 6), -1)
        self.assertEqual(liststuff.find(d, 5), 2)
        self.assertEqual(liststuff.find(e, -34), 2)
    
    def test_Count(self):
        a = [1, 2, 3, 3, 4, 5]
        b = [-1, 1, -1, 2, 3, 4]
        c = []
        d = [5, 5, 5, 5, 5]
        e = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
        self.assertEqual(liststuff.count(a, 3), 2)
        self.assertEqual(liststuff.count(b, -1), 2)
        self.assertEqual(liststuff.count(c, 5), 0)
        self.assertEqual(liststuff.count(d, 5), 5)
        self.assertEqual(liststuff.count(e, 3), 2)
    
    def test_Equivalent(self):
        a = [1, 2, 3, 4, 5]
        b = [5, 4, 3, 2, 1]
        c = [1, 2, 1, 2 ,3, 4, 5]
        d = [5, 2, 4, 3, 1, 1, 2]
        e = [1, 2, 3, 4, 5]
        f = [1, 2, 3, 4, 5, 6, 7]
        g = [1, 2, 3, 4, 5]
        h = [2, 3, 4, 5, 1]
        i = []
        j = []
        self.assertTrue(liststuff.equivalent(a, b))
        self.assertTrue(liststuff.equivalent(c, d))
        self.assertFalse(liststuff.equivalent(e, f))
        self.assertTrue(liststuff.equivalent(g, h))
        self.assertTrue(liststuff.equivalent(i, j))

    def test_Prefix(self):
        a = [1, 2, 3]
        b = [1, 2, 3, 4, 5]
        c = [2, 4, -3]
        d = [1, 2, 4, -3, 1]
        e = [1, 2, 3]
        f = [3, 2, 1]
        g = [-3, -2, -1]
        h = [3, 2, 1]
        i = [1, 2, 3]
        j = [1, 2, 3]
        self.assertTrue(liststuff.prefix(a, b))
        self.assertFalse(liststuff.prefix(c, d))
        self.assertFalse(liststuff.prefix(e, f))
        self.assertFalse(liststuff.prefix(g, h))
        self.assertTrue(liststuff.prefix(i, j))
    
    def test_Sort(self):
        a = [1, 2, 3, 4, 5]
        b = [1, 2, 3, 4, 5]
        c = [5, 4, 3, 2, 1]
        d = [1, 2, 3, 4, 5]
        e = [4, -3, -5, -2, 1]
        f = [-5, -3, -2, 1, 4]
        g = [-1, -2, -3]
        h = [-3, -2, -1]
        i = [100, 99, 98, 52, 1]
        j = [1, 52, 98, 99, 100]
        liststuff.sort(a)
        liststuff.sort(c)
        liststuff.sort(e)
        liststuff.sort(g)
        liststuff.sort(i)
        self.assertEqual(a, b)
        self.assertEqual(c, d)
        self.assertEqual(e, f)
        self.assertEqual(g, h)
        self.assertEqual(i, j)
    
    def test_Is_Ascending(self):
        a = []
        b = [1, 2, 3, 4, 5]
        c = [-5, -4, -3, -2, -1]
        d = [1, 2, 4, 3 ,5]
        e = [-1, 2, -3, 4, -5]
        self.assertTrue(liststuff.is_ascending(a))
        self.assertTrue(liststuff.is_ascending(b))
        self.assertTrue(liststuff.is_ascending(c))
        self.assertFalse(liststuff.is_ascending(d))
        self.assertFalse(liststuff.is_ascending(e))
    
    def test_filter(self):
        a = [1, 2, 8, 9]
        b = [8, 9]
        c = [1, 2, 3, 4, 5]
        d = []
        e = [6, 7, 8, 9, 10]
        f = [6, 7, 8, 9, 10]
        g = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5, 6]
        h = [6]
        i = []
        j = []
        def greaterThan5(x):
            if x > 5:
                return True
            else:
                return False
        self.assertEqual(liststuff.filter(a, greaterThan5), b)
        self.assertEqual(liststuff.filter(c, greaterThan5), d)
        self.assertEqual(liststuff.filter(e, greaterThan5), f)
        self.assertEqual(liststuff.filter(g, greaterThan5), h)
        self.assertEqual(liststuff.filter(i, greaterThan5), j)

    def test_map(self):
        a = [1, 2, 3, 4, 5]
        b = [2, 3, 4, 5, 6]
        c = [-1, -2, -3, -4, -5]
        d = [0, -1, -2, -3, -4,]
        e = []
        f = []
        g = [1, 3, 5, 2, 5]
        h = [2, 4, 6, 3, 6]
        i = [1, 1, 1, 1, 1]
        j = [2, 2, 2, 2, 2]
        def add1(x):
            return x + 1
        liststuff.map(a, add1)
        liststuff.map(c, add1)
        liststuff.map(e, add1)
        liststuff.map(g, add1)
        liststuff.map(i, add1)
        self.assertEqual(a, b)
        self.assertEqual(c, d)
        self.assertEqual(e, f)
        self.assertEqual(g, h)
        self.assertEqual(i, j)

    def test_rotate(self):
        a = [1, 2, 3, 4, 5]
        b = [5, 1, 2, 3, 4]
        c = [1, 2, 3, 4, 5]
        d = [2, 3, 4, 5, 1]
        e = [1, 2, 3, 4, 5]
        f = [1, 2, 3, 4, 5]
        g = [5, 2, 3, 4, 1]
        h = [5 ,2, 3, 4, 1]
        i = []
        j = []
        liststuff.rotate(a, 1)
        liststuff.rotate(c, -1)
        liststuff.rotate(e, 5)
        liststuff.rotate(g, -5)
        liststuff.rotate(i, 1000)
        self.assertEqual(a ,b)
        self.assertEqual(c, d)
        self.assertEqual(e, f)
        self.assertEqual(g, h)
        self.assertEqual(i, j)

if __name__ == "__main__":
    unittest.main()