using System;
using UnityEngine;
using System.Collections;


public class CityBulder : MonoBehaviour
{
    public GameObjects[] buildings;
    public int mapHeight = 20;
    public int mapWidth = 20;

    void start()
    {
        for(int h = 0; h < mapHeight; h++)
        {
            for(int w = 0; w< mapWidth; w++)
            {
                Vector3 position = new Vector3(w, 0, h);
                int n = Random.Range(0, buildings.length);
                Instantiate(buildings[n], position, Quaternion.identity);
            }
        }
    }
	public CityBulder()
	{
	}
}
