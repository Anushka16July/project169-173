AFRAME.registerComponent("markerhandler", {
    init: async function() {
     this.el.addEventListener("markerFound",() =>{
        console.log("marker is Found");
        this.handleMarkerFound();
     });

     this.el.addEventListener("markerLost",()=> {
        console.log("marker is lost");
        this.handleMarkerLost

     })
      },
  
      askUserId: function() {
      var iconUrl =
        "https://raw.githubusercontent.com/whitehatjr/ar-toy-store-assets/master/toy-shop.png";
  
      swal({
        title: "Welcome to Toy Shop!!",
        icon: iconUrl,
        content: {
          element: "input",
          attributes: {
            placeholder: "Type your uid Ex:( U01 )"
          }
        }
      }).then(inputValue => {
        uid = inputValue;
      });
    },
    handleMarkerFound: function() {
        var buttonDIv= document.getElementById("button-div");
        buttonDiv.style.Display ="flex";

        var orderButton=document.getElementById("order-button");
        var orderSummaryButton=document.getElementById("order-summary-button");

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Order!!",
                text:"",
                timer:2000,
                buttons:false
            });
         });

         orderSummaryButton.addEventListener("click",()=>{
           swal({
            icon:"warning",
            title:"order Summary",
            text:"Work in Progress..."
           })
         })
   
    },
    
    handleMarkerLost: function() {
    var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });