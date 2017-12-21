#!/user/bin/env python

import sys
import json
import re
import pprint

pp = pprint.PrettyPrinter(indent=2)
    


def safeGetField(obj, keysArray):
    currentDict = obj
    for key in keysArray:
        if key in currentDict.keys():
            currentDict = currentDict[key]
        else:
            return {}
    return currentDict

# will need to customize this, but the gist is working now for some reason


def marc_json_to_dict(json):
    booksJson = []
    for marcEntry in json:
        bookEntry = {}
        fields = marcEntry['fields']
        fieldsObj = {}  # too angry to deal with this bullshit format
        for field in fields:
            try:
                identifier = field.keys()[0]
                if identifier in fieldsObj.keys():
                    if identifier == '521':
                        newIdentifier = identifier + safeGetField(field[identifier], ["ind1"])
                        fieldsObj[newIdentifier] = field[identifier]
                    elif identifier == '650':
                        otherSubfields = field[identifier]['subfields'];
                        for field in otherSubfields:
                            fieldsObj[identifier]['subfields'].append(field)
                else:
                    fieldsObj[identifier] = field[identifier]
            except:
                print fieldsObj
        # ID
        idSubfields = safeGetField(fieldsObj, ['020', 'subfields'])
        for obj in idSubfields:
            try:
                id = obj['a']
            except:
                pass
        bookEntry['id'] = id

        # TITLE
        titleSubfields = safeGetField(fieldsObj, ['245', 'subfields'])
        for obj in titleSubfields:
            try:
                title = obj['a']
            except:
                pass
        bookEntry['title'] = title

        # AUTHOR
        authorSubfields = safeGetField(fieldsObj, ['100', 'subfields'])
        for obj in authorSubfields:
            try:
                author = obj['a']
            except:
                pass
        bookEntry['author'] = author

        # DESCRIPTION
        descriptionSubfields = safeGetField(fieldsObj, ['520', 'subfields'])
        for obj in descriptionSubfields:
            try:
                description = obj['a']
            except:
                pass
        bookEntry['description'] = description

        # PAGES
        pagesSubfields = safeGetField(fieldsObj, ['300', 'subfields'])
        for obj in pagesSubfields:
            try:
                pagesString = obj['a']
                pages = re.findall(r'\d+', pagesString)[0]
            except:
                pass
        bookEntry['pages'] = pages 
        
        # LEXILE, kind of a pain for formatting
        lexileSubfields = safeGetField(fieldsObj, ['5218','subfields']) #lexile decorator on field 521
        lexile = 0
        string = ''
        if not lexileSubfields:
            lexileSubfields = safeGetField(fieldsObj, ['521','subfields'])
        for obj in lexileSubfields:
            try:
                lexile = obj['a']
            except:
                string = obj['b']
            if string == 'Lexile.':
                bookEntry['lexile'] = lexile
                break
        if 'lexile' not in bookEntry.keys():
            bookEntry['lexile'] = 'No Lexile Information'

        # TAGS
        tagsSubfields = safeGetField(fieldsObj, ['650', 'subfields'])
        tagsList = []
        genre = 'fiction'
        for obj in tagsSubfields:
            try:
                tag = obj['a']
                tagsList.append(tag)
            except:
                try:
                    genre = obj['v']
                except:
                    pass
        
        bookEntry['tags'] = tagsList
        bookEntry['fiction'] = genre
        print bookEntry['fiction']


        booksJson.append(bookEntry)

    # print booksJson
    return booksJson

# def marc_to_json(marcobj):
#     return json.dumps(marc_to_dict(marcobj))


def main():
    f = open(sys.argv[1])
    jsonObj = json.loads(f.read())
    # print jsonObj

    f = open('dump.json', 'w')

    marc_json_to_dict(jsonObj)
    f.close()


main()
