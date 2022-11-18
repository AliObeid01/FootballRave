
import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { COLORS } from '../core/COLORS'

export default function BasicTable({route}) {
    
const id = route.params.id;

const CONTENT = {
    tableHead: ['Team', 'PL', 'W', 'D','L', 'GD', 'Pts'],
    //tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
    tableData: [
      ['1', '2', '3','1', '2', '3','1'],
      ['1', '2', '3','1', '2', '3','1'],
      ['1', '2', '3','1', '2', '3','1'],
      ['1', '2', '3','1', '2', '3','1'],
    ],
  };
  
return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[4]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>

          <Rows
            data={CONTENT.tableData}
            flexArr={[4]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,backgroundColor: COLORS.InputColor},
  head: { height: 40, backgroundColor: COLORS.primaryColor },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center',color:COLORS.secondaryColor },
});
