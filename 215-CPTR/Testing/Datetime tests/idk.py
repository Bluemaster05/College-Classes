from PySide6.QtWidgets import QApplication, QComboBox, QStyleFactory

app = QApplication([])

combobox = QComboBox()
combobox.setStyleSheet("""
    QComboBox:hover {
        background-color: lightblue;
        border: 1px solid black;
    }
    
""")

# Apply a specific style sheet for a platform if needed
# For example, on macOS:
if app.platformName() == 'macOS':
    combobox.setStyleSheet("""
        /* macOS-specific styles */
    """)

combobox.show()
app.exec_()