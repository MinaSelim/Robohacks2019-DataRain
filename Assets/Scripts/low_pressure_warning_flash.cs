using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class low_pressure_warning_flash : MonoBehaviour
{
	//Handle to GameObjects
	public GameObject pressure;
	public MaskableGraphic imageToToggle;
	public float interval = 3f;
	public float startDelay = 1f;
	public bool currentState = true;
	public bool defaultState = false;
	bool isBlinking = false;
	public AudioClip clip;

	// Start is called before the first frame update
	void Start()
	{
		
	}

	// Update is called once per frame
	void Update()
	{
		var t = pressure.GetComponent<Text>().text;
		double x = System.Convert.ToDouble(t.Substring(0, t.Length - 2));
		if (x < 91000 & x > 0)
		{
			imageToToggle.enabled = currentState;
			StartBlink();
		}
		else
		{
			CancelInvoke();
			imageToToggle.enabled = defaultState;
		}

	}

	public void StartBlink()
	{
		var t = pressure.GetComponent<Text>().text;
		double x = System.Convert.ToDouble(t.Substring(0, t.Length - 2));
		// do not invoke the blink twice - needed if you need to start the blink from an external object
		if (isBlinking)
			return;

		if (imageToToggle != null)
		{
			isBlinking = true;
			InvokeRepeating("ToggleState", startDelay, interval);
		}
	}

	public void ToggleState()
	{
		imageToToggle.enabled = !imageToToggle.enabled;

		// plays the clip at (0,0,0)
		if (clip)
			AudioSource.PlayClipAtPoint(clip, Vector3.zero);
	}

}
