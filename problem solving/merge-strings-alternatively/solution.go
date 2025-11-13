//take length of both
//run the loop for both using two vars
//append one by one

func mergeAlternately(word1 string, word2 string) string {

	len1 := len(word1)
	len2 := len(word2)

	if len1 == 0 {
		return word2
	} else if len2 == 0 {
		return word1
	}

	i := 0
	j := 0

	var result strings.Builder

	for i < len1 || j < len2 {
		if i < len1 {
			result.WriteByte(word1[i])
		}
		if i < len2 {
			result.WriteByte(word2[j])
		}
		i++
		j++
	}

	return result.String()
}