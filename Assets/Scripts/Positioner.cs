using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Positioner : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject CamPos;

    private RectTransform Temp, Pressure, Humidity, PM, UV;
    void Start()
    {
        Temp = GameObject.Find("Temperature").GetComponent<RectTransform>();
        Pressure = GameObject.Find("Pressure").GetComponent<RectTransform>();
        Humidity = GameObject.Find("Humidity").GetComponent<RectTransform>();
        PM = GameObject.Find("PM").GetComponent<RectTransform>();
        UV = GameObject.Find("UV").GetComponent<RectTransform>();


        Temp.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 200, CamPos.GetComponent<Transform>().position.y - 50);
        Pressure.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 200, CamPos.GetComponent<Transform>().position.y + 400);
        Humidity.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 800, CamPos.GetComponent<Transform>().position.y + 400);
        PM.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 1350, CamPos.GetComponent<Transform>().position.y + 400);
        UV.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 1350, CamPos.GetComponent<Transform>().position.y - 50);

    }

    // Update is called once per frame
    void Update()
    {
        Temp.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 200, CamPos.GetComponent<Transform>().position.y - 50);
        Pressure.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 200, CamPos.GetComponent<Transform>().position.y + 400);
        Humidity.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 800, CamPos.GetComponent<Transform>().position.y + 400);
        PM.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 1350, CamPos.GetComponent<Transform>().position.y + 400);
        UV.position = new Vector2(CamPos.GetComponent<Transform>().position.x + 1350, CamPos.GetComponent<Transform>().position.y - 50);
    }
}
