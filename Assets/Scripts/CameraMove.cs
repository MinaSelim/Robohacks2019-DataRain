using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject Cam;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.W))
        {
            Cam.GetComponent<Transform>().position = new Vector3(Cam.GetComponent<Transform>().position.x, Cam.GetComponent<Transform>().position.y, Cam.GetComponent<Transform>().position.z + 0.09f);
        }
        if(Input.GetKey(KeyCode.S)) 
        {
            Cam.GetComponent<Transform>().position = new Vector3(Cam.GetComponent<Transform>().position.x, Cam.GetComponent<Transform>().position.y, Cam.GetComponent<Transform>().position.z - 0.09f);

        }
        if(Input.GetKey(KeyCode.D))
        {
            Cam.GetComponent<Transform>().position = new Vector3(Cam.GetComponent<Transform>().position.x + 0.09f, Cam.GetComponent<Transform>().position.y, Cam.GetComponent<Transform>().position.z);
        }
        if((Input.GetKey(KeyCode.A)))
        {
            Cam.GetComponent<Transform>().position = new Vector3(Cam.GetComponent<Transform>().position.x - 0.09f, Cam.GetComponent<Transform>().position.y, Cam.GetComponent<Transform>().position.z);

        }
    }
}
