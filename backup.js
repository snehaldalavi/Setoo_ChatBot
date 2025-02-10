



            let slideBox = document.getElementById("slideBox");
            let topModule = document.getElementById("topModule");
            let bottomModule = document.getElementById("bottomModule")

            function toggleBtn() {
                slideBox.classList.add("activeChat");
                document.querySelector("#showTopic a.activeTopic")?.classList.remove("activeTopic");
            }
            function showChat() {
                slideBox.classList.remove("activeChat");
                slideBox.classList.toggle("slide-down")
            }
            document.getElementById("toggleBtn").addEventListener("click", toggleBtn);
            document.getElementById("showChat").addEventListener("click", showChat);

            function showTopModule(){
                topModule.classList.remove("activeChat");
                bottomModule.classList.add("activeChat");
                //alert('showTopModule')
            }

            function showBottomModule(){
                topModule.classList.add("activeChat");
                bottomModule.classList.remove("activeChat")
                //alert('showBottomModule');
            }


            // togglebutton changed
            function toggleBtn() {
                slideBox.classList.add("activeChat");
                document.querySelector("#showTopic a.activeTopic")?.classList.remove("activeTopic");
            }

            
        