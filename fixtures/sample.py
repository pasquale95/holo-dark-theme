import os
from typing import Optional

CONST = 42

class Greeter(Base):
    """Doc."""
    def __init__(self, name: str, count: Optional[int] = None) -> None:
        self.name = name
        self._count = count or CONST
    @property
    def label(self) -> str:
        return f"{self.name}: {self._count!r}"

def main(*args, **kwargs):
    g = Greeter("x")
    if g.label is not None and CONST > 3:
        print(g.label, os.sep)
    return [i**2 for i in range(10) if i % 2 == 0]

# Line comment: TODO rework this section
# another single-line comment
