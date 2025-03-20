const { error } = require("console");
const fs = require('fs');
const filePath = 'C:/Users/HONOR/Desktop/lab_js/LABA3/src/modules/file.txt';
const copiedFilePath = 'C:/Users/HONOR/Desktop/lab_js/LABA3/src/modules/copied_file.txt';
const folderPath = 'C:/Users/HONOR/Desktop/lab_js/LABA3/src/modules/new_folder';
const directoryPath = 'C:/Users/HONOR/Desktop/lab_js/LABA3/src/modules';

function writeFileSync() {
    try {
        fs.writeFileSync(filePath, 'Мама мыла раму (синхрон)');
        console.log('Запись успешна (синхрон)');
    } catch (error) {
        console.error('Ошибка при записи файла (синхронно):', error);
    }
}
function writeFileAsync() {
    fs.writeFile(filePath, 'Мама мыла раму (асинхрон)', (error) => {
        if (error) {
            console.error('Ошибка при записи файла (асинхронно):', error);
        } else {
            console.log('Запись успешна (асинхрон)');
        }
    });
}

function readFileSync() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('Данные прочитаны (синхронно):', data);
        return data;
    } catch (error) {
        console.error('Ошибка при чтении файла (синхронно):', error);
    }
}
function readFileAsync() {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла (асинхронно):', error);
        } else {
            console.log('Данные прочитаны:', data);
        }
    });
}

function updateFileSync() {
    try {
        fs.writeFileSync(filePath, 'Обновленные данные');
        console.log('Файл обновлен синхронно');
    } catch (error) {
        console.error('Ошибка при обновлении файла синхронно:', error);
    }
}
function updateFileAsync() {
    fs.writeFile(filePath, 'Обновленные данные', (error) => {
        if (error) {
            console.error('Ошибка при обновлении файла асинхронно:', error);
        } else {
            console.log('Файл обновлен асинхронно');
        }
    });
}

function deleteFileSync() {
    try {
        fs.writeFileSync(filePath, '', 'utf8');
        console.log('Содержимое файла успешно удалено синхронно');
    } catch (error) {
        console.error('Ошибка при удалении содержимого файла синхронно:', error);
    }
}
function deleteFileAsync() {
    fs.writeFile(filePath, '', 'utf8', (error) => {
        if (error) {
            console.error('Ошибка при удалении содержимого файла асинхронно:', error);
        } else {
            console.log('Содержимое файла успешно удалено асинхронно');
        }
    });
}

function removeNoiseSync() {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        data = data.replace(/[0-9]/g, '').toLowerCase();
        fs.writeFileSync(filePath, data);
        console.log('Шум удален синхронно');
    } catch (error) {
        console.error('Ошибка при удалении шума синхронно:', error);
    }
}
function removeNoiseAsync() {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла асинхронно:', error);
        } else {
            data = data.replace(/[0-9]/g, '').toLowerCase();
            fs.writeFile(filePath, data, (error) => {
                if (error) {
                    console.error('Ошибка при записи файла асинхронно:', error);
                } else {
                    console.log('Шум удален асинхронно');
                }
            });
        }
    });
}

function copyFileSync() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        fs.writeFileSync(copiedFilePath, data);
        console.log('Файл скопирован синхронно');
    } catch (error) {
        console.error('Ошибка при копировании файла синхронно:', error);
    }
}
function copyFileAsync() {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла асинхронно:', error);
        } else {
            fs.writeFile(copiedFilePath, data, (error) => {
                if (error) {
                    console.error('Ошибка при записи файла асинхронно:', error);
                } else {
                    console.log('Файл скопирован асинхронно');
                }
            });
        }
    });
}

function createFolderSync() {
    try {
        fs.mkdirSync(folderPath);
        console.log('Папка создана синхронно');
    } catch (error) {
        console.error('Ошибка при создании папки синхронно:', error);
    }
}
function createFolderAsync() {
    fs.mkdir(folderPath, (error) => {
        if (error) {
            console.error('Ошибка при создании папки асинхронно:', error);
        } else {
            console.log('Папка создана асинхронно');
        }
    });
}

function deleteFolderSync() {
    try {
        fs.rmdirSync(folderPath, { recursive: true });
        console.log('Папка удалена синхронно');
    } catch (error) {
        console.error('Ошибка при удалении папки синхронно:', error);
    }
}
function deleteFolderAsync() {
    fs.rmdir(folderPath, { recursive: true }, (error) => {
        if (error) {
            console.error('Ошибка при удалении папки асинхронно:', error);
        } else {
            console.log('Папка удалена асинхронно');
        }
    });
}

function listFilesSync() {
    try {
        const files = fs.readdirSync(directoryPath);
        files.forEach((file) => {
            const filePath = directoryPath + '/' + file;
            if (fs.lstatSync(filePath).isFile() && !file.startsWith('.')) {
                console.log(file);
            }
        });
    } catch (error) {
        console.error('Ошибка при получении списка файлов синхронно:', error);
    }
}
function listFilesAsync() {
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('Ошибка при получении списка файлов асинхронно:', error);
            return;
        }
        files.forEach((file) => {
            const filePath = directoryPath + '/' + file;
            fs.lstat(filePath, (error, stats) => {
                if (error) {
                    console.error('Ошибка при получении информации о файле:', error);
                    return;
                }
                if (stats.isFile() && !file.startsWith('.')) {
                    console.log(file);
                }
            });
        });
    });
}

function deleteAllFilesAndFoldersSync() {
    try {
        const files = fs.readdirSync(directoryPath);
        files.forEach((file) => {
            if (!file.startsWith('.')) {
                const filePath = directoryPath + '/' + file;
                if (fs.lstatSync(filePath).isDirectory()) {
                    fs.rmdirSync(filePath, { recursive: true });
                } else {
                    fs.unlinkSync(filePath);
                }
            }
        });
        console.log('Все файлы и папки, за исключением служебных, успешно удалены синхронно');
    } catch (error) {
        console.error('Ошибка при удалении всех файлов и папок синхронно:', error);
    }
}
function deleteAllFilesAndFoldersAsync() {
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('Ошибка при получении списка файлов и папок асинхронно:', error);
            return;
        }
        files.forEach((file) => {
            if (!file.startsWith('.')) {
                const filePath = directoryPath + '/' + file;
                fs.lstat(filePath, (error, stats) => {
                    if (error) {
                        console.error('Ошибка при получении информации о файле:', error);
                        return;
                    }
                    if (stats.isDirectory()) {
                        fs.rmdir(filePath, { recursive: true }, (error) => {
                            if (error) {
                                console.error('Ошибка при удалении папки асинхронно:', error);
                            }
                        });
                    } else {
                        fs.unlink(filePath, (error) => {
                            if (error) {
                                console.error('Ошибка при удалении файла асинхронно:', error);
                            }
                        });
                    }
                });
            }
        });
        console.log('Все файлы и папки, за исключением служебных, успешно удалены асинхронно');
    });
}
