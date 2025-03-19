using System;
using System.Collections.Generic;
using UnityEngine;

public class Truck : MonoBehaviour
{
    [SerializeField] private List<GameObject> _cargoSlots; 
    [SerializeField] private int _maxCapacity = 5; 
    
    private int _currentCargoCount = 0;
    
    public bool IsFull => _currentCargoCount >= _maxCapacity;
    public int RemainingCapacity => _maxCapacity - _currentCargoCount;
    

    public event Action OnTruckFull;
    
    public bool LoadLog()
    {
        if (IsFull)
            return false;
        
        if (_currentCargoCount < _cargoSlots.Count)
        {
            _cargoSlots[_currentCargoCount].SetActive(true);
        }
        
        _currentCargoCount++;
        
        if (IsFull)
        {
            OnTruckFull?.Invoke();
        }
        
        return true;
    }
    
    public int LoadLogs(int count)
    {
        int logsLoaded = 0;
        
        for (int i = 0; i < count; i++)
        {
            if (LoadLog())
                logsLoaded++;
            else
                break;
        }
        
        return logsLoaded;
    }
    
    public void Clear()
    {
        foreach (GameObject slot in _cargoSlots)
        {
            slot.SetActive(false);
        }
        
        _currentCargoCount = 0;
    }
}