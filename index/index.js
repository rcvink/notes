noteList = new NoteList();
noteList.add("Favourite drink: seltzer");
noteListView = new NoteListView(noteList);
noteController = new NoteController(noteListView);
noteController.insertHTML();
