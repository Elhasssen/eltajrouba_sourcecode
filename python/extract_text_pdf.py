import PyPDF2
# put 'example.pdf' in working directory
# and open it in read binary mode
pdfFileObj = open('python/NetworkChuck30WindowsCommandLineCheatSheet-230327-093753.pdf', 'rb')
# call and store PdfFileReader
# object in pdfReader
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
pageObj = pdfReader.getPage(0)
# extract the page object
# by extractText() function
texts = pageObj.extractText()
# print the extracted texts
print(texts)