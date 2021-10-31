function jsontocsv(arr, columns, separator = ',') {
  return [
    columns.join(separator),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : separator}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    ),
  ].join('\n');
}
// usgae
/* const jsonArr =  [{'col1': 'a', 'col2': 'b', col3': 'c', 'col4': 'd'},{'col1': 'e', 'col2': 'f', col3': 'g', 'col4': 'h'}];
jsontocsv(jsonArr, ['col1','col2','col3','col4']);
// expected output
'col1,col2,col3,col4\na,b,c,d\ne,f,g,h';
*/
