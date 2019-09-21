using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{

    public float panSpeed = 20f;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        Vector3 currentPosition = transform.position;

        if (Input.GetKey("w"))
        {
            currentPosition.z += panSpeed * Time.deltaTime;

        }
        else if (Input.GetKey("a"))
        {
            currentPosition.x -= panSpeed * Time.deltaTime;
        }
        else if (Input.GetKey("s"))
        {
            currentPosition.z -= panSpeed * Time.deltaTime;
        }
        else if (Input.GetKey("d"))
        {
            currentPosition.x += panSpeed * Time.deltaTime;
        }
        transform.position = currentPosition;

    }
}
