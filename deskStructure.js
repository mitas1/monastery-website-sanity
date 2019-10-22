import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Oznamy")
                .child(
                    S.editor()
                        .id("announcement")
                        .schemaType("announcement")
                        .documentId("main-announcement"),
                ),
            S.listItem()
                .title("Autor")
                .child(
                    S.documentTypeList('author')
                ),
        ]);
