using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Net;
using System.IO;
using System;
using System.Threading;

public class DataUpdater : MonoBehaviour
{
    // Start is called before the first frame update
    private HttpWebRequest request;
    private string url;
    private string html;
    private int framecount;
    private string Temp;
    private string Humidity;
    private string Pressure;
    private string PM;
    private string UV;
    public GameObject TemperatureOb;
    public GameObject HumidityOb;
    public GameObject PressureOb;
    public GameObject PMOb;
    public GameObject UVOb;
    void Start()
    {
        framecount = 0;
        url = "http://localhost:3000/";
    }

    // Update is called once per frame
    void Update()
    {
        framecount++;
        if (framecount % 60 == 0)
        {
            request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream stream = response.GetResponseStream();
            StreamReader reader = new StreamReader(stream);
            html = reader.ReadToEnd();
            response.Close();
           
            Temp = html.Substring(0, html.IndexOf(" "));
            if (Temp.Contains("bat"))
            {
                html = html.Replace(html.Substring(0, html.IndexOf(" ") + 1), "");
                Temp = html.Substring(0, html.IndexOf(" "));
            }
            Temp = Temp.Substring(Temp.IndexOf("=")+1);
            html = html.Replace(html.Substring(0, html.IndexOf(" ")+1), "");
            Humidity = html.Substring(0, html.IndexOf(" "));
            Humidity = Humidity.Substring(Humidity.IndexOf("=") + 1);
            html = html.Replace(html.Substring(0, html.IndexOf(" ")+1), "");
            Pressure = html.Substring(0, html.IndexOf(" "));
            Pressure = Pressure.Substring(Pressure.IndexOf("=") + 1);
            html = html.Replace(html.Substring(0, html.IndexOf(" ")+1), "");
            PM = html.Substring(0, html.IndexOf(" "));
            PM = PM.Substring(PM.IndexOf("=") + 1);
            html = html.Replace(html.Substring(0, html.IndexOf(" ")+1), "");
            UV = html.Substring(0, html.IndexOf(" "));
            UV = UV.Substring(UV.IndexOf("=") + 1);

            //Update the HUD elements
            TemperatureOb.GetComponent<UnityEngine.UI.Text>().text = Temp;
            HumidityOb.GetComponent<UnityEngine.UI.Text>().text = Humidity;
            PressureOb.GetComponent<UnityEngine.UI.Text>().text = Pressure;
            PMOb.GetComponent<UnityEngine.UI.Text>().text = PM;
            UVOb.GetComponent<UnityEngine.UI.Text>().text = UV +" uv";
        }
    }
}
