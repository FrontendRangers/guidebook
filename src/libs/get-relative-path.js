import path from 'path';

function getRelativePath(file) {
    let relativePath = path.relative(path.dirname(file), path.resolve(path.resolve('example/')));
    if (relativePath !== '') {
        return relativePath + '/';
    } else {
        return relativePath;
    }
}

export default getRelativePath;