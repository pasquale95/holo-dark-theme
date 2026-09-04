using System;
using System.Collections.Generic;

namespace App.Services;

public sealed class Greeter<T> where T : IComparable<T>
{
    private const int MaxSize = 100;
    private readonly List<T> _items = new();

    public string Name { get; init; } = "greeter";

    public void Add(T item)
    {
        if (_items.Count >= MaxSize) throw new InvalidOperationException("full");
        _items.Add(item);
    }

    public async Task<int> FlushAsync()
    {
        await Task.Delay(10);
        return _items.Count;
    }
}

// Line comment
/* Block comment */
/// <summary>XML doc comment</summary>
