from PySide6.QtWidgets import (QMainWindow,
                               QApplication,
                               QPushButton,
                               QLabel,
                               QGridLayout,
                               QWidget)

class CalculatorGui(QMainWindow):
    def __init__(self):
        super().__init__()
        
        self.display = QLabel('number go here')
        self.digits = [ QPushButton(str(digit)) for digit in range(10)]
        self.operators = [ QPushButton(operator) for operator in '+-*/=']
        
        grid = QGridLayout()
        grid.addWidget(self.display, 0, 0, 1, -1)

        for digit in range(1, 10):
            self.digits[digit].clicked.connect(self.digitClicked)
            grid.addWidget(self.digits[digit])


        panel = QWidget()
        panel.setLayout(grid)
        self.setCentralWidget(panel)

    def digitClicked(self):
        print(self.sender().text())

if __name__ == '__main__':
    app = QApplication()
    calculator = CalculatorGui()
    calculator.show()
    app.exec()