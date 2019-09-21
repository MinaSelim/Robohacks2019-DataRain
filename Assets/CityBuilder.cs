using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CityBuilder : MonoBehaviour
{
    public GameObject[] buildings;
    public int mapHeight = 20;
    public int mapWidth = 20;

    // Start is called before the first frame update
   
        void Start()
        {
            for (int h = 0; h < mapHeight; h++)
            {
                for (int w = 0; w < mapWidth; w++)
                {
                    Vector3 position = new Vector3(w, 0, h);
                    int n = Random.Range(0, buildings.Length);
                    Instantiate(buildings[n], position, Quaternion.identity);
                }
            }
        }
    
    
}
