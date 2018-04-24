


$("#table-btn").on("click", function() {
      $.get("/tables", function(data) {
        console.log(data);
        
          $("#name").text(data.name);
          $("#phone").text(data.role);
          $("#email").text(data.age);
          $("#id").text(data.forcePoints);
        
      });
    });


