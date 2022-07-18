import readXlsxFile from 'read-excel-file/node'

export const extractor = async (file) => {
    let rowsData = []
      await readXlsxFile(`./uploads/${file}`).then((rows) => {
        rows.map((_, index) => {
            if (index > 1) {
                rowsData = [...rowsData, _]
            }
        })
    }
    
    )
    return rowsData
}
