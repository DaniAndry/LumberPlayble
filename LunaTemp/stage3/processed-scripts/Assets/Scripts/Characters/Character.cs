using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class Character : MonoBehaviour
{
    [SerializeField] private List<GameObject> _cargo;

    private int _currentCargoIndex = 0;
    private bool _isFull = false;

    public event Action OnCargoFull;

    private void OnTriggerEnter(Collider other)
    {
        if (_isFull) return;

        if (other.TryGetComponent(out Tree tree))
        {
            tree.Take();
            TakeTree(tree);
        }
    }

    private void TakeTree(Tree tree)
    {
        if (_currentCargoIndex < _cargo.Count)
        {
            _cargo[_currentCargoIndex].SetActive(true);
            _currentCargoIndex++;

            if (_currentCargoIndex >= _cargo.Count)
            {
                _isFull = true;
                OnCargoFull?.Invoke();
            }
        }
    }

    public void Unload()
    {
        foreach (GameObject go in _cargo)
        {
            go.SetActive(false);
        }
        _currentCargoIndex = 0;
        _isFull = false;
    }
}