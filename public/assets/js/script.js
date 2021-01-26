$(() => {
  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burg-name").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $("devour").on("click", function () {
    const id = $(this).data("id");
    const eaten = $(this).data("eaten");
    const inBelly = { value: eaten };

    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      data: JSON.stringify(inBelly),
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      location.reload();
    });
  });
});
