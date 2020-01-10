

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob'

const App: () => React$Node = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Text>
					Exemplo para baixar arquivos em react-native
				</Text>
				<Button
				onPress={() => teste()}
				title="Clique aqui para fazer download"
				/>
			</SafeAreaView>
		</>
	);

	
	function ConsoleTeste() {
		console.log('123456789')
	}

	function teste(){
		RNFetchBlob
		.config({
			addAndroidDownloads : {
				useDownloadManager : true, // <-- this is the only thing required
				// Optional, override notification setting (default to true)
				notification : true,
				title : 'sample.pdf',
				// Optional, but recommended since android DownloadManager will fail when
				// the url does not contains a file extension, by default the mime type will be text/plain
				description : 'File downloaded by download manager.'
			}
		})
		.fetch('GET', 'http://www.africau.edu/images/default/sample.pdf')
		.then((resp) => {
			// the path of downloaded file
			resp.path()
		})
	}
};


export default App;
