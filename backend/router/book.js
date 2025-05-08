const booklist ={
  selectList :"select * from book",
  selecById:"select * from book where id=?",
  insertInfo :"insert book (name,writer,content,created_date) values(?,?,?,sysdate())",
  updateInfo :"update book set ? where id=?",
  deleteInfo:"DELETE FROM book WHERE id = ?"
}
module.exports = booklist;