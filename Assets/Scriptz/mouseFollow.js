function Update ()
{
    mouse_pos = Input.mousePosition;
    mouse_pos.z = 10; //The distance between the camera and object
    object_pos = Camera.main.WorldToScreenPoint(transform.position);
    mouse_pos.x = mouse_pos.x - object_pos.x;
    mouse_pos.y = mouse_pos.y - object_pos.y;
    angle = Mathf.Atan2(mouse_pos.y, mouse_pos.x) * Mathf.Rad2Deg;
    transform.rotation = Quaternion.Euler(Vector3(0, 0, angle-90));
    }