using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TemperatureData : MonoBehaviour

{
    public GameObject temperature;
    // Start is called before the first frame update
    void Start()
    {
        temperature = GameObject.Find("Temperature");
    }

    // Update is called once per frame
    void Update()
    {
        var t = temperature.GetComponent<Text>().text;
        double x = System.Convert.ToDouble(t.Substring(0, t.Length -1));
        x += .01;
        temperature.GetComponent<Text>().text = x.ToString()+"C";


    }
}
