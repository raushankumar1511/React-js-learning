export default function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2024";
  return (
    <div class="container">
      <div class="row item-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger buttons">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
