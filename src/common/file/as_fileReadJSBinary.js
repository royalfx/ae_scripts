// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {File} file 
 */
function as_fileReadJSBinary(file) {
	if (!file.exists) {
		return null;
	} else {
		return $.evalFile(file.fsName);
	}
}
