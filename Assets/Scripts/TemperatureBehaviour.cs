using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TemperatureBehaviour : MonoBehaviour

{
    //Handle to GameObjects
    public GameObject temperature;
    public GameObject tempWarning;
    public Color Opacity;
    public float OpacityLimit;

    // Start is called before the first frame update
    void Start()
    {
        Opacity = new Color(255, 0, 0, 0);
        OpacityLimit = 0.30f;
    }

    // Update is called once per frame
    void Update()
    {
        var t = temperature.GetComponent<Text>().text;
        double x = System.Convert.ToDouble(t.Substring(0, t.Length -1));
        if(x > 25.0)
        {
            Opacity = new Color(255, 0, 0, Opacity.a + 0.01f);
            if (Opacity.a >= OpacityLimit)
            {
                Opacity.a = OpacityLimit;
            }
            tempWarning.GetComponent<Image>().color = Opacity;
        }
        else if(x < 15.0)
        {
            Opacity = new Color(0,0,255, Opacity.a += 0.01f);
            if (Opacity.a >= OpacityLimit)
            {
                Opacity.a = OpacityLimit;
            }
            tempWarning.GetComponent<Image>().color = Opacity;
        }
        else
        {
            Opacity.a -= 0.01f;
            if (Opacity.a <= 0.0f)
            {
                Opacity.a = 0.0f;
            }
            tempWarning.GetComponent<Image>().color = Opacity;
        }
        
        temperature.GetComponent<Text>().text = x.ToString()+"C";

    }
}
