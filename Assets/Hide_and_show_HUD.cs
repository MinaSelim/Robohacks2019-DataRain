using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hide_and_show_HUD : MonoBehaviour
{
	public GameObject generalHUD;
	public GameObject tempHUD;
	public GameObject Humidity;
	public GameObject pressure;
	public GameObject PM;
	public GameObject UV;
	public GameObject buttonToActivate;
	bool isHudShown = false;
	bool isClicked = false;
    // Start is called before the first frame update
    void Start()
    {
		tempHUD.SetActive(isHudShown);
		Humidity.SetActive(isHudShown);
		PM.SetActive(isHudShown);
		UV.SetActive(isHudShown);
		pressure.SetActive(isHudShown);
		buttonToActivate.SetActive(true);
	}

    // Update is called once per frame
    void Update()
    {
		
		if (Input.GetKey(KeyCode.Space))
		{
			tempHUD.SetActive(!isHudShown);
			Humidity.SetActive(!isHudShown);
			PM.SetActive(!isHudShown);
			UV.SetActive(!isHudShown);
			pressure.SetActive(!isHudShown);
			buttonToActivate.SetActive(false);
		}

		if(Input.GetKey(KeyCode.C) )
		{
			tempHUD.SetActive(false);
			Humidity.SetActive(false);
			PM.SetActive(false);
			UV.SetActive(false);
			pressure.SetActive(false);
			buttonToActivate.SetActive(true);
		}
		
	}

	public void displayHUD()
	{
		tempHUD.SetActive(!isClicked);
		Humidity.SetActive(!isClicked);
		PM.SetActive(!isClicked);
		UV.SetActive(!isClicked);
		pressure.SetActive(!isClicked);
		buttonToActivate.SetActive(false);
	}

	
}
