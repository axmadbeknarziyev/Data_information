$(".button").on("click", () =>{
    let id = $("#number").val()
    console.log(id);
    $.ajax(`https://reqres.in/api/users/${id}`,{
        type: "GET",
        success: function(ress){
            console.log(ress);

            let li = `
              <li class="m-4 ">
                 <img src="${ress.data.avatar}">
                 <div>${ress.data.first_name} ${ress.data.last_name}</div>
                 <div>${ress.data.email}</div>
                 <div>${ress.data.id}</div>
              </li>
            `
            $(".users").append(li)
        },
        error: function (err){
            console.log(err);
        }
    })
})