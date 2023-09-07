import React from 'react'

    
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "pink",
        width: "100%",
        height: "100px",
      }}
    >
      <div style={{ width: "77%"}}>
        <div style={{ display: "flex", flexDirection: "row", height: "50%" }}>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "12%",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Product 
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "88%",
            }}
          >
            <button
              type="submit"
              style={{
                height: "30px",
                margin: "10px",
              }}
            >
              Sign up
            </button>
            <button
              type="submit"
              style={{
                height: "30px",
                marginRight: "20px",
              }}
            >
              Sign in
            </button>
            <br />

            <div style={{justifyContent:'center'}}>
                ahahaha
            </div>
          </div>
        </div>

        <div style={{ height: "50%" }}></div>
      </div>
    </div>
  );
};

export default Header;